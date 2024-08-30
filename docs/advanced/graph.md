---
outline: deep
---

# 以图生图

当我们看到一张特别喜欢的图,想生成一些同类型同风格的图片,该如何做呢,其实官方给出了很多方法

## describe

您需要先准备一张想要描述的图片。
在 Midjourney 的输入框中输入“/describe ”，然后上传您准备的图片。
之后，Midjourney 会为您生成几个关于这张图片的文字描述，这些描述可以为您后续创作类似风格或主题的图像提供提示词参考，有助于您更精准地通过文字指令生成想要的图像效果。
例如，如果您上传了一张风景图片，“/describe”生成的描述可能会包括风景的类型（如山脉、森林、海滩等）、主要的色彩、可能的季节等方面的描述。

但是这类做法只能做到描述的是大致相同的人物和风格,但是往往结果和给出的原图相去甚远!

![alt text](https://github.com/webkubor/picx-images-hosting/raw/master/blog/image.6t722sthga.jpg)


![alt text](https://github.com/webkubor/picx-images-hosting/raw/master/blog/image.9dcwffuxij.jpg)

## 垫图

顾名思义,在图片上垫一层,具体如何垫呢?

- 提前下载好你喜欢的图,先在 discord 聊天窗口上传一张你喜欢的图,图片上传到discord界面内,会生成一个图片链接,你可以很容易拿到图片链接(这里要注意,必须要在discord的图片,图片链接里会携带信息,随便从别的网站上找来的链接不行)
- 请严格按照我给出的格式进行命令拼接 **喜欢的图链接 + prompt + --iw 2**
- 机器人拿到命令后 会先基于你给出的图作为参考 ,再加上你的描述出图, 这时候--iw 2这个命令就很重要
- iw 是相似度的意思,最大是 2 ,意思很简单,和原图相似度最高
- 例如:https://s.mj.run/EB8PpA3uUqU smlie,black hair, head close - up, fantasy, 3D art, Best Detail, HD, c4d, blender, 3Drendering, high resolution --iw 2



## 还是不像怎么办?<Badge type="warning" text="当前版本最佳" />


组合!
![alt text](https://github.com/webkubor/picx-images-hosting/raw/master/blog/image.2h88v9ej7j.jpg)
也就是垫图+ describe

- 先用describe以图生文,你会拿到四组关键词,可以先生成看看,找到最理想的关键词组(这一步你拿到了 关键词 prompt和喜欢的图链接)
- 利用垫图的格式将**图链接 + describe生成的理想关键词 + --iw 2**
- 打工告成!
![alt text](https://github.com/webkubor/picx-images-hosting/raw/master/blog/image.3d4qaps7n7.jpg)