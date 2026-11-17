// Test plan: 6 models x 5 rounds x 2 seeds, same prompt/seed/size per round.
const MODELS = [
  { id: 'qwen',   label: 'Qwen Image 2.1',    model_type: 'qwen_image_21_7B',    steps: 40 },
  { id: 'krea',   label: 'Krea 2 Turbo',      model_type: 'krea2_turbo',         steps: 8 },
  { id: 'fibo',   label: 'Fibo 2.0 Dev',      model_type: 'fibo2_dev',           steps: 30 },
  { id: 'flux',   label: 'Flux 3 Klein 5.6B', model_type: 'flux3_klein',         steps: 16 },
  { id: 'moss',   label: 'MOSS Image SFT',    model_type: 'moss_image_sft',      steps: 50 },
  { id: 'zimage', label: 'Z-Image Turbo',     model_type: 'z_image',             steps: 8 },
];

const CHAR = 'a 24-year-old woman with a warm girl-next-door look: shoulder-length wavy light-brown hair, light freckles across her nose, hazel eyes, natural minimal makeup, friendly smile';

const ROUNDS = [
  { id: 'r1', title: 'The Face', judge: 'skin texture, eyes, how AI it looks',
    prompt: `Close-up portrait photo of ${CHAR}, sitting by a window with soft natural daylight on her face, looking into the camera, cream knit sweater, shallow depth of field, shot on a 50mm lens, realistic skin texture, Instagram photo.` },
  { id: 'r2', title: 'Mirror Selfie', judge: 'hands, phone, reflection logic',
    prompt: `Mirror selfie of ${CHAR} in a bright bedroom, holding a black smartphone in front of her chest with one hand, the phone visible in the mirror reflection, her other hand resting on her hip, wearing high-waisted jeans and a white crop t-shirt, morning light, casual Instagram post.` },
  { id: 'r3', title: 'Café Candid', judge: 'natural pose, hands on cup, small objects',
    prompt: `Candid photo of ${CHAR} laughing at a small wooden table in a cosy café, both hands wrapped around a ceramic cup of latte with heart latte art, a croissant on a plate, warm afternoon light, blurred café background, natural candid moment.` },
  { id: 'r4', title: 'Full Body Street', judge: 'anatomy, clothing, feet',
    prompt: `Full-body street-style photo of ${CHAR} walking toward the camera on a city sidewalk, beige trench coat over a white t-shirt, blue jeans, white sneakers, small black shoulder bag, golden-hour light, shop fronts behind her, fashion influencer photo, whole body visible from head to shoes.` },
  { id: 'r5', title: 'Text Sign', judge: 'text rendering',
    prompt: `Photo of ${CHAR} smiling and holding up a handwritten white cardboard sign with both hands in front of her, the sign reads exactly "Follow @lilyrose.daily" in thick black marker, plain light living room background, soft daylight.` },
];

const SEEDS = [240117, 881502];
const RES = '960x1216';

module.exports = { MODELS, ROUNDS, SEEDS, RES, CHAR };
