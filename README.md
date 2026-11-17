# Same Seed Lab — Materials

Workflows, prompts and settings from the [Same Seed Lab](https://www.youtube.com/@SameSeedLab) videos.
Everything was run on one RTX 3090 (24 GB).

## How to use the files

- `*.api.json` files are ComfyUI workflows in API format. Drag one onto the ComfyUI canvas to load it, or send it to the `/prompt` endpoint.
- The other `.json` workflows are normal ComfyUI graphs (drag and drop).
- Model, text encoder, VAE and LoRA file names are the ones on my disk. Pick your own copies in the loader nodes if yours are named differently.

## 01 — AI influencer test, 6 models (WanGP)

This episode ran in WanGP, not ComfyUI, so there is no workflow file. `plan.js` holds the full test plan: the character description, the five round prompts, both seeds and the step count per model.

| Model | Steps |
|---|---|
| Qwen Image 2.1 | 40 |
| Krea 2 Turbo | 8 |
| Fibo 2.0 Dev | 30 |
| Flux 3 Klein 5.6B | 16 |
| MOSS Image SFT | 50 |
| Z-Image Turbo | 8 |

Size 960x1216, seeds 240117 and 881502.

## 02 — The rematch: MOSS vs Krea 2 vs Fibo 2 vs Qwen 2.1 vs Flux 3

`workflows-api/` has one workflow per model variant. `full_*` are the base models at their full step counts; `fast_*` are the distilled or turbo versions.

| Full | Fast |
|---|---|
| `full_moss_base`, `full_moss_sft` | `fast_moss_base_dmd2`, `fast_moss_sft_dmd2` |
| `full_kromoss` | `fast_kromoss_dmd2` |
| `full_krea2_raw` | `fast_krea2_turbo` |
| `full_qwen21` | `fast_qwen21_turbo` |
| `full_flux3_base` | `fast_flux3_distilled` |
| `full_fibo_dev` | `fast_zimage_turbo` |

- `prompts.json` — the plain prompts and the phone-LoRA round.
- `prompts_fibo_json_and_enhanced.json` — the per-model rewrites, including the structured JSON captions Fibo 2.0 needs.
- `workflows-phone-loras/` — the MOSS and Krea 2 Turbo graphs used for the phone-photography and Instagram LoRA round.

LoRAs used:

- MOSS 8-step DMD2: <https://huggingface.co/lodestones/Kromoss/blob/main/8-steps-dmd2-lora.safetensors> (8 steps, CFG 1, euler / simple)
- Phone Photography 2000–2025: <https://civitai.com/models/2537408/phone-photography-2000-2025>

## 03 — Pika H3 Flex (MiniMax H3 LoRA)

`workflows-api/` has the ComfyUI templates the 29 clips were made with, at their official settings:

- `video_pika_h3_flex_t2v` — text to video
- `video_pika_h3_flex_fl2va` — first/last frame to video with audio
- `video_pika_h3_flex_ref2va` — reference image to video with audio
- `video_minimax_h3_t2v`, `video_minimax_h3_r2v` — plain MiniMax H3 for the speed comparison
