/* start module: BlockyPyjsdl */
$pyjs['loaded_modules']['BlockyPyjsdl'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['BlockyPyjsdl']['__was_initialized__']) return $pyjs['loaded_modules']['BlockyPyjsdl'];
	var $m = $pyjs['loaded_modules']['BlockyPyjsdl'];
	$m['__repr__'] = function() { return '<module: BlockyPyjsdl>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'BlockyPyjsdl';
	$m['__name__'] = __mod_name__;


	$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
	$m['x_pos'] = 0;
	$m['y_pos'] = 0;
	$m['setup'] = function() {
		var FPS,text,$mul1,block_col,font,block_size,clock,$div6,bg_col,$div4,mainloop,$sub3,$sub2,$sub1,textpos,$sub4,screen,background,$div2,$div3,$mul4,$mul3,$mul2,$div1,$div5,blocksurface;
		$m['pygame']['init']();
		screen = $m['pygame']['display']['set_mode']($p['tuple']([470, 500]));
		$m['pygame']['display']['set_caption']('Blocky');
		$m['pygame']['mouse']['set_visible'](1);
		bg_col = $p['tuple']([0, 99, 0]);
		background = $m['pygame']['Surface'](screen['get_size']());
		background = background['convert']();
		background['fill'](bg_col);
		font = $m['pygame']['font']['Font'](null, 24);
		text = font['render']('Take Blocky on an adventure with wasd', 1, $p['tuple']([10, 10, 10]));
		textpos = $pyjs_kwargs_call(text, 'get_rect', null, null, [{'centerx':(typeof ($div1=background['get_width']())==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2))}]);
		background['blit'](text, textpos);
		block_size = 50;
		block_col = $p['tuple']([247, 243, 7]);
		$m['x_pos'] = $p['__op_sub']($sub1=(typeof ($div3=background['get_width']())==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4)),$sub2=(typeof ($mul1=0.5)==typeof ($mul2=block_size) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)));
		$m['y_pos'] = $p['__op_sub']($sub3=(typeof ($div5=background['get_height']())==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
			$div5/$div6:
			$p['op_div']($div5,$div6)),$sub4=(typeof ($mul3=0.5)==typeof ($mul4=block_size) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)));
		blocksurface = $m['pygame']['Surface']($p['tuple']([block_size, block_size]));
		$m['pygame']['draw']['rect'](blocksurface, block_col, $p['tuple']([0, 0, block_size, block_size]));
		screen['blit'](background, $p['tuple']([0, 0]));
		screen['blit'](blocksurface, $p['tuple']([$m['x_pos'], $m['y_pos']]));
		clock = $m['pygame']['time']['Clock']();
		mainloop = true;
		FPS = 60;
		return $p['tuple']([screen, background, blocksurface]);
	};
	$m['setup']['__name__'] = 'setup';

	$m['setup']['__bind_type__'] = 0;
	$m['setup']['__args__'] = [null,null];
	$m['run'] = function() {
		var $iter1_nextval,$iter1_type,$sub6,mainloop,$sub8,$iter1_iter,$add2,$add3,$add1,$iter1_array,$add4,$sub7,event,$sub5,$iter1_idx;
		mainloop = true;
		$iter1_iter = $m['pygame']['event']['get']();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			event = $iter1_nextval['$nextval'];
			if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'QUIT')))) {
				mainloop = false;
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'KEYDOWN')))) {
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_ESCAPE')))) {
					mainloop = false;
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_d')))) {
					$m['x_pos'] = $p['__op_add']($add1=$m['x_pos'],$add2=5);
					$m['screen']['blit']((typeof background == "undefined"?$m['background']:background), $p['tuple']([0, 0]));
					$m['screen']['blit']((typeof blocksurface == "undefined"?$m['blocksurface']:blocksurface), $p['tuple']([$m['x_pos'], $m['y_pos']]));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_a')))) {
					$m['x_pos'] = $p['__op_sub']($sub5=$m['x_pos'],$sub6=5);
					$m['screen']['blit']((typeof background == "undefined"?$m['background']:background), $p['tuple']([0, 0]));
					$m['screen']['blit']((typeof blocksurface == "undefined"?$m['blocksurface']:blocksurface), $p['tuple']([$m['x_pos'], $m['y_pos']]));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_w')))) {
					$m['y_pos'] = $p['__op_sub']($sub7=$m['y_pos'],$sub8=5);
					$m['screen']['blit']((typeof background == "undefined"?$m['background']:background), $p['tuple']([0, 0]));
					$m['screen']['blit']((typeof blocksurface == "undefined"?$m['blocksurface']:blocksurface), $p['tuple']([$m['x_pos'], $m['y_pos']]));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_s')))) {
					$m['y_pos'] = $p['__op_add']($add3=$m['y_pos'],$add4=5);
					$m['screen']['blit']((typeof background == "undefined"?$m['background']:background), $p['tuple']([0, 0]));
					$m['screen']['blit']((typeof blocksurface == "undefined"?$m['blocksurface']:blocksurface), $p['tuple']([$m['x_pos'], $m['y_pos']]));
				}
			}
		}
		$m['pygame']['display']['flip']();
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null];
	var $tupleassign1 = $p['__ass_unpack']($m['setup'](), 3, null);
	$m['screen'] = $tupleassign1[0];
	$m['background'] = $tupleassign1[1];
	$m['blocksurface'] = $tupleassign1[2];
	$m['pygame']['display']['setup']($m['run']);
	return this;
}; /* end BlockyPyjsdl */


/* end module: BlockyPyjsdl */


/*
PYJS_DEPS: ['pyjsdl']
*/
