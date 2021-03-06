# niceSize

niceSize is a lightweight JavaScript library that allows you to easily build stunning fully responsive websites. Now even with fallbacks to allow your site to still run whenever JavaScript is disabled.

## Installation

In order to use niceSize you don't have to do any heavy installation. Just download niceSize.js, niceSize.css, niceSizeFallback.css and for best perfomance niceSize.min.js, include them in your website and you're ready to go. If you want to test niceSize or rely on external sources, you also can include it with jsDelivr. An example niceSize.css configuration file is provided.

## Usage

Include this in your html:
```html
<!doctype HTML>
<html>
<head>
    <!-- the rest of <head> elements -->
    <link rel="stylesheet" href="[local path of niceSize.css]">
    <noscript>
        <link rel="stylesheet" href="[local path of niceSizeFallback.css]">
    </noscript>
    <!-- or -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nicesize/nicesize/niceSize.css">
    <noscript>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nicesize/nicesize/niceSizeFallback.css">
    </noscript>
</head>
<body>
    <!-- <body> content -->
    <script src="[local path of niceSize.min.js]"></script>
    <!-- or -->
    <script src="https://cdn.jsdelivr.net/gh/nicesize/nicesize/niceSize.min.js"></script>
</body>
</html>
```
Make your configuration in the niceSize.css file:
```css
/*
============================
          niceSize
github.com/niceSize/niceSize
============================
*/

#niceSize{
    --vwMultiplier: 1;
    --remMultiplier: 1;
    height: 100vh;
    --maxWidthMobileSite: 637px;
    --mobileSiteScalingRatio: 2.5;
}

```
Finally use niceSize in your css to build a website like shown here:
```css
#example{
    width: calc(var(--nSWidth) * 100);
    height: calc(var(--nSHeight) * 100);
    font-size: calc(var(--nSMaxWidth) * 2);
    box-shadow: 0 0 calc(var(--nSHeightMFF) * 2) #000;
}
```
To understand what each feature does please visit the wiki tab.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## Programming Language
- [JavaScript](https://www.w3schools.com/js/DEFAULT.asp)

## License
[ISC](https://opensource.org/licenses/ISC)
