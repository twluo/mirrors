var MangaExceed={mirrorName:"Manga Exceed",canListFullMangas:false,mirrorIcon:"img/mangaexceed.png",languages:"en",isMe:function(url){return(url.indexOf("example.net")!=-1);},getMangaList:function(search,callback){$.ajax({url:"http://example.net/",beforeSend:function(xhr){xhr.setRequestHeader("Cache-Control","no-cache");xhr.setRequestHeader("Pragma","no-cache");},success:function(objResponse){res=[];var div=document.createElement("div");div.innerHTML=objResponse;$("a.lst",div).each(function(index){res.push([$('b:first-child',$(this)).text().trim(),$(this).attr("href")]);});callback("Manga Exceed",res);}});},getListChaps:function(urlManga,mangaName,obj,callback){$.ajax({url:urlManga,beforeSend:function(xhr){xhr.setRequestHeader("Cache-Control","no-cache");xhr.setRequestHeader("Pragma","no-cache");},success:function(objResponse){var div=document.createElement("div");div.innerHTML=objResponse;var res=[];$("a.list",div).each(function(index){res.push([$(this).text(),$(this).attr("href")]);});callback(res,obj);}});},getInformationsFromCurrentPage:function(doc,curUrl,callback){var name=$('h1.ttl a',doc).text();var currentChapter=$($('select.cbo_wpm_chp option:selected',doc)[0]).text();var currentMangaURL=$('h1.ttl a',doc).attr('href');var currentChapterURL=currentMangaURL+$($('select.cbo_wpm_chp option:selected',doc)[0]).attr('value')+'/';callback({"name":name,"currentChapter":currentChapter,"currentMangaURL":currentMangaURL,"currentChapterURL":currentChapterURL});},getListImages:function(doc,curUrl){var res=[];var baseUrl=$('h1.ttl a',doc).attr('href')+$($('select.cbo_wpm_chp option:selected',doc)[0]).attr('value')+'/';$('.cbo_wpm_pag:first option',doc).each(function(index)
{res.push(baseUrl+$(this).attr('value')+'/');});return res;},removeBanners:function(doc,curUrl){$('#sct_img_mng_enl ~ *',doc).remove()},whereDoIWriteScans:function(doc,curUrl){return $(".scanAMR",doc);},whereDoIWriteNavigation:function(doc,curUrl){return $(".navAMR",doc);},isCurrentPageAChapterPage:function(doc,curUrl){return($('#contentInner3 img',doc).length>0);},doSomethingBeforeWritingScans:function(doc,curUrl){$('#main_content',doc).css('width','auto');$('#contentInner3',doc).empty();$("<div class='navAMR'></div>").appendTo($("#contentInner3",doc));$("<div class='scanAMR'></div>").appendTo($("#contentInner3",doc));$("<div class='navAMR'></div>").appendTo($("#contentInner3",doc));$('.wpm_nav',doc).remove();$('.wpm_tip',doc).remove();$('#sct_img_mng_enl',doc).remove();$("#middle",doc).css("width","auto");},nextChapterUrl:function(select,doc,curUrl){if($(select).children("option:selected").prev().size()!=0){return $(select).children("option:selected").prev().val();}
return null;},previousChapterUrl:function(select,doc,curUrl){if($(select).children("option:selected").next().size()!=0){return $(select).children("option:selected").next().val();}
return null;},getImageFromPageAndWrite:function(urlImg,image,doc,curUrl){$.ajax({url:urlImg,success:function(objResponse)
{var div=document.createElement("div");div.innerHTML=objResponse;$(image).attr('src',$('#contentInner3 img',div).attr('src'));}});},isImageInOneCol:function(img,doc,curUrl){return false;},getMangaSelectFromPage:function(doc,curUrl){return null;},doAfterMangaLoaded:function(doc,curUrl){$("body > div:empty",doc).remove();}}
// Call registerMangaObject to be known by includer
if (typeof registerMangaObject == 'function') {
	registerMangaObject("Manga Exceed", MangaExceed);
}