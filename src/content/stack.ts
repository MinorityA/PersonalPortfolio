import type { StackCategory } from "@/content/types";

export const stack: StackCategory[] = [
  {
    name: "Model Development",
    items: [
      { label: "Pytorch", level: "Production" },
      { label: "Tensorflow", level: "Production" },
      { label: "NumPy", level: "Production" },
      { label: "OpenMMLab", level: "Hands-on" }
    ]
  },
  {
    name: "Computer Vision",
    items: [
      { label: "Object Tracking", level: "Hands-on" },
      { label: "SLAM", level: "Hands-on" },
      { label: "Image Denoising", level: "Hands-on" },
      { label: "Gaussian Splatting", level: "Exploring" }
    ]
  },
  {
    name: "Deployment",
    items: [
      { label: "ONNX", level: "Production" },
      { label: "TensorRT", level: "Hands-on" },
      { label: "Quantization", level: "Hands-on" },
      { label: "Graph Optim", level: "Exploring" }
    ]
  },
  {
    name: "Systems & Perfomance",
    items: [
      { label: "C++", level: "Production" },
      { label: "Linux", level: "Production" },
      { label: "Docker", level: "Production" },
      { label: "CUDA", level: "Hands-on" }
    ]
  }
];
