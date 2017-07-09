var cssId = 'mastodon-widget-css'; 
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://widget.nagoyadon.jp/widget.css';
    link.media = 'all';
    head.appendChild(link);
}



function __create_tag(tag_name) {
    return document.createElement(tag_name);
}

function __add_attr(tag, attr, value) {
    tag[attr] = value;
}

function __add_class(tag, attr, value) {
    tag.className = value;
}

function __update_html(tag, value) {
    tag.innerHTML = value;
}
function __append_child(p, c) {
    p.appendChild(c);
}

function __selector_tag(tag_name) {
    return document.getElementsByTagName(tag_name);
}



// 読み込まれイベント
// オールドスクールな感じ
function initMstdnWidget(){
	
	var widgets = document.querySelectorAll("mstdn-toot");
    var output = '<div class="mastodonWidget"><div class="mastodonWidget-col"><p class="mastodonWidget-pic"></p><p class="mastodonWidget-prof"><span class="mastodonWidget-name"></span><span class="mastodonWidget-id"></span></p></div><div class="mastodonWidget-content"></div><p class="mastodonWidget-date"></p></div>';

	var widget;
	var avatar;
	var acct;
	var displayName;
	var createdAt;
	var content;
	
	// foreach使いたい
	for(var i=0; i < widgets.length; i++) {
		widget = widgets[i];
		
		// データの取得
		acct		= widget.getAttribute("acct");
		domain		= widget.getAttribute("domain");
		displayName	= widget.getAttribute("display-name");
		createdAt	= widget.getAttribute("created-at");
		avatar		= widget.getAttribute("avatar");
		content		= widget.innerHTML;
		
		
        widget.innerHTML = output; 
		
		// ★書き出し
        var pic = __create_tag('img');
        __add_attr(pic, 'src', avatar);
        __append_child(widget.querySelector(".mastodonWidget-pic"), pic);
        __update_html(widget.querySelector(".mastodonWidget-name"), displayName);
        __update_html(widget.querySelector(".mastodonWidget-id"), '<a href="https://' + domain + '/@' + acct + '">' + '@' + acct + '</a>');
        __update_html(widget.querySelector(".mastodonWidget-content"), content);
        __update_html(widget.querySelector(".mastodonWidget-date"), createdAt);
		
		
	}
	
}

window.onload = initMstdnWidget();