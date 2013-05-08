<script type="text/javascript">
					window.onload = function() {
						var js = document.createElement("script");js.type = "text/javascript";
						js.src = "js/jquery-1.7.2.min.js";
						js.onload = js.onreadystatechange = function(){ 
							var disqus_shortname = 'zugu'; // required: replace example with your forum shortname
							var dsc = document.createElement("script");dsc.type = "text/javascript";
							dsc.src = '//' + disqus_shortname + '.disqus.com/count.js';
							dsc.onload = dsc.onreadystatechange = function(){
								alert($("#footer").html());
							}
							head.appendChild(dsc);
							
							var dsq = document.createElement("script");dsq.type = "text/javascript";
							dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
							dsq.onload = dsq.onreadystatechange = function(){
								//alert($("#footer").html());
							}
							head.appendChild(dsq);
							
							
						}
						
						var head = document.getElementsByTagName('head')[0];
						head.appendChild(js);	
					}
				</script>