---
outline: deep
---

# 基本指令学习

Basic parameters - 控制图像的基础样式学习

## iw权重

垫图一般需要相似风格的图片，我们要加iw参数， 2最大， 比如 --iw 2



## Aspect Ratios 宽高

控制图片长宽比例，默认是1:1, --aspect, or --ar, 

例如: 生成4:3的图片，--ar 4:3 ,大的壁纸我们生成 --ar：16:9

## No
控制图片中不要出现的元素使用--no,
例如：--no dogs, 会尝试从图像中移除狗

## Quality
- 控制图片的精细质量程度 ，默认值是1，数值越大，越多细节吗，但渲染时间越长
- --quality <.25, .5, 1, or 2> or --q <.25, .5, 1, or 2>


## Seed
 - 控制图片随机性，即相似度设置
 - --seed <0-4294967295>


## Version
-  切换算法模型版本，目前最新的是V5，默认是V4模型
- --version or --v <1-5>


## Niji
 切换到动漫风格模型, --niji6(当前版本)