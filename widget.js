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
		
		// 書き出し済みフラグが立っていたら無視
		if(widget.getAttribute("exp") == "true") { continue; }

		// データの取得
		acct		= widget.getAttribute("acct");
		domain		= widget.getAttribute("domain");
		displayName	= widget.getAttribute("display-name");
		createdAt	= widget.getAttribute("created-at");
		avatar		= widget.getAttribute("avatar");
		content		= widget.innerHTML;
		
		
		widget.innerHTML = output; 
		
		// ★書き出し		
		var pic = document.createElement('img');
		pic.setAttribute('src', avatar);
		widget.querySelector(".mastodonWidget-pic").appendChild(pic);
		widget.querySelector(".mastodonWidget-name").innerHTML = displayName;
		widget.querySelector(".mastodonWidget-id").innerHTML =  '<a href="https://' + domain + '/@' + acct + '">' + '@' + acct + '</a>';
		widget.querySelector(".mastodonWidget-content").innerHTML =  content;
		widget.querySelector(".mastodonWidget-date").innerHTML =  createdAt;
		
		// ★「書き出し済み」フラグを付与(もうちょっと何とかしたい)
		widget.setAttribute('exp', 'true');
	}
	
}

window.onload = initMstdnWidget();