---
outline: deep
---

# Character Reference 与  Style Reference




::: info

both **v6** and **Niji 6**

:::

### 风格参考Style Reference

风格复制  它的链接将用于 --sref 中，可以适当调高 sw 参数提高风格一致性

--sref 可以与 --sw （style weight）参数搭配使用，用来调节风格强度。--sw 默认值为 100，数值范围 0-1000；数值越高，生成的图像与参考图像的风格就越相似；数值越低，画面就越接近提示词直出的效果。经过测试，个人觉得数值在 250 左右效果较好，超过 500 画面容易出现扭曲变形。

```javascript
【prompt】 --sref  url  --sw 0  --v 6 
```

### 角色一致性功能“Character Reference”

1. 在提示词后面添加“--cref URL”，其中 URL 是角色参考图片的网址。Midjourney会自动分析参考图片中的角色特征，并在生成新图片时尽可能保持一致。
2. 可以使用“--cw”参数调整参考图片的“强度”，取值范围为 0 到 100，默认为 100。
3. 强度为 100 时，会参考图片中角色的面部、发型和服装。
4. 强度为 0 时，只关注面部特征（适合改变服装、发型等）。

```javascript
【prompt】 --cref  人脸URL  --cw 0  --v 6 
```
