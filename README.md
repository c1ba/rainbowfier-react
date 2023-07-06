# Rainbowfier

Ever felt that moment in your life where you needed a little bit of color to it? A little bit of passion? Well.. Your life will still be miserable, but at least you can color a text or a box. Not just in one color, but in MANY COLORS!

<p align="center">
  <img src="https://thumbs.gfycat.com/GraveBigEasternnewt-size_restricted.gif" />
</p>

Rainbowfier is a custom React hook meant to give an infinite rainbowish effect to whatever object you set the property to.

### Parameters

+ refObject: React.MutableRefObject - in order to modify the element in question
+ timeInMilliseconds: number - how fast should the rainbow cycle go
+ colorOptions (optional):
  + darkerOrLighter: "DARK" | "LIGHT" - if you want your rainbow to have a lighter or a darker tone
  + colorOffset: number - how much lighter or darker would you like it to be on a scale from 0 to 255

### How to use

First, the install

```
npm i rainbowfier-library
```

All you need to do is to initiate a ref object and pass it in the refObject parameter as in the example folder. Make sure that the ref object is also applied to the respective element as well.

P.S: In case you apply it on a text element (h1, h2, h3, h4, h5, h6, a, p), it should change the color of the text. Otherwise, it should change the background color.
