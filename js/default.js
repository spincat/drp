$(function(){

	$('#disqus_container .comment').on('click',function(){
			$(this).html('������...');
			var disqus_shortname = 'beiyuu';
			var that = this;
			BYB.includeScript('http://' + disqus_shortname + '.disqus.com/embed.js',function(){$(that).remove()}); //����һ������js�ĺ���
	});
	
})
