$(document).ready((function(){var e=document.querySelector("trix-editor").editor;$(document).on("click",".show-hide-editor-btn",(function(e){e.preventDefault();var t=$(e.currentTarget).data("result"),r=$("#"+t);r.hasClass("trix-editor")&&(r.toggle(),$("trix-toolbar").toggle(),$("trix-editor").toggle())})),document.addEventListener("core-insert-shortcode",(function(t){e.insertString(t.detail.shortcode)})),document.addEventListener("core-insert-media",(function(t){var r=t.detail.files;if("media-insert-trix"===t.detail.element.data("action")&&0!==r.length){var n=document.createElement("div");r.forEach((function(t){var r;if("image"===t.type){var n=document.createElement("img");n.src=t.full_url,r=n.outerHTML}else{var i=document.createElement("a");i.href=t.full_url,i.text=t.name,r=i.outerHTML}var o=new Trix.Attachment({content:r});e.insertAttachment(o)})),e.insertHTML(n.innerHTML)}}))}));