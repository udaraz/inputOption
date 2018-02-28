# inputOption

A lightwieght jQuery plugin for adding option buttons to Bootstrap 3 compatible input text boxes.

![screenshot_1](https://user-images.githubusercontent.com/16623041/36778634-54bac9f6-1c93-11e8-8bab-2f87345807cd.png)

### Usage

Basic
```html
 <div class="form-group">
     <label class="control-label"> Element </label>
     <div class="input-group">         
         <input type="text" id="elementName">
     </div>
 </div>
```
```html
<script>
  $("#elementName").inputOption();
</script>
```
Options

```html
<script>
$("#elementName").inputOption({
    placeholder:"Select Element",
    btnMethod:"ElementView()",
    clearBtn: true,
    mainBtnIcon: "clip-pencil",
    btnModalStatus: true, //options: disable ,enable or true, false
    btnClearStatus: true, //options: disable ,enable or true, false
    btnMethod: "", 
    clearMethod: "",
    inputReadStatus:false,
    
});

</script>
```
