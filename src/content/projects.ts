import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    id: "robot-vision-system",
    title: "Basketball Robot Vision System",
    summary: "A vision system for basketball robot to find basketballs with detector and locate its position on the playground.",
    tech: ["ONNX", "C++", "TensorRT", "CUDA"],
    role: "model finetuning + TensorRT deployment + C++ inference pipeline",
    outcome: "Achieved 28 FPS at 640x640 on Jetson Xavier NX with stable localization under indoor lighting",
  },
  {
    id: "mot-project",
    title: "Enhanced End-to-End Multi-Object Tracking Model",
    summary: "A DETR-based End-to-End Multi-Object Tracker with decoupled detector and tracker in decoder.",
    tech: ["Python", "PyTorch", "Numpy"],
    role: "model arch design + training",
    outcome: "Reached competitive results on several datasets with state-of-the-art models, such as DanceTrack, BFT and SportsMOT.",
  },
  {
    id: "vlm-captioner-project",
    title: "Deployment VLM for captioning on Jetson",
    summary: "A video captioning demo on Jetson nano with a small VLM and kv-cache",
    tech: ["ONNX", "TensorRT", "C++"],
    role: "TensorRT deployment + C++ inference pipeline",
    outcome: "Achieved 6 FPS captioning on Jetson Nano with FP16 TensorRT and KV-cache, while maintaining stable caption quality.",
  }
];
