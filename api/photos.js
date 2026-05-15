import { kv } from '@vercel/kv';

const PHOTOS_KEY = 'gallery_photos';

/* 본문 크기 제한 — 사진 1장당 최대 ~5MB까지 허용 */
export const config = {
  api: {
    bodyParser: { sizeLimit: '6mb' }
  }
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  /* 전체 사진 목록 조회 */
  if (req.method === 'GET') {
    const list = (await kv.get(PHOTOS_KEY)) || [];
    return res.json(list);
  }

  /* 사진 1장 추가 */
  if (req.method === 'POST') {
    const entry = req.body;
    if (!entry || !entry.src) {
      return res.status(400).json({ error: '이미지 데이터가 없습니다' });
    }
    const list = (await kv.get(PHOTOS_KEY)) || [];
    const newPhoto = {
      id:        entry.id || Date.now(),
      src:       entry.src,
      caption:   entry.caption || '',
      createdAt: new Date().toISOString()
    };
    list.push(newPhoto);
    await kv.set(PHOTOS_KEY, list);
    return res.json({ ok: true, photo: newPhoto });
  }

  /* 개별 삭제 (?id=xxx) / 전체 초기화 */
  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (id) {
      const list = (await kv.get(PHOTOS_KEY)) || [];
      const filtered = list.filter(p => String(p.id) !== String(id));
      await kv.set(PHOTOS_KEY, filtered);
    } else {
      await kv.set(PHOTOS_KEY, []);
    }
    return res.json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
