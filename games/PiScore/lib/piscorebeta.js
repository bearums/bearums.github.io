/* start module: piscorebeta */
$pyjs['loaded_modules']['piscorebeta'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['piscorebeta']['__was_initialized__']) return $pyjs['loaded_modules']['piscorebeta'];
	var $m = $pyjs['loaded_modules']['piscorebeta'];
	$m['__repr__'] = function() { return '<module: piscorebeta>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'piscorebeta';
	$m['__name__'] = __mod_name__;


	$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
	$m['Digit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'piscorebeta';
		$method = $pyjs__bind_method2('__init__', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var piDig;
			piDig = function(k) {
				var $add2,PI,$add1;
				PI = '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745';
				return PI['__getitem__']($p['__op_add']($add1=k,$add2=1));
			};
			piDig['__name__'] = 'piDig';

			piDig['__bind_type__'] = 0;
			piDig['__args__'] = [null,null,['k']];
			self['val'] = piDig($p['float_int'](val));
			if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 0))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_0');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 1))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_1');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 2))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_2');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 3))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_3');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 4))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_4');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 5))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_5');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 6))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_6');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 7))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_7');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 8))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_8');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 9))) {
				self['key'] = $p['getattr']($m['pygame'], 'K_9');
			}
			else {
				self['key'] = 'error';
				$p['printFunc'](["there's a cock up"], 1);
			}
			if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 0))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP0');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 1))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP1');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 2))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP2');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 3))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP3');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 4))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP4');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 5))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP5');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 6))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP6');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 7))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP7');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 8))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP8');
			}
			else if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'val')), 9))) {
				self['key_num'] = $p['getattr']($m['pygame'], 'K_KP9');
			}
			else {
				self['key_num'] = 'error';
				$p['printFunc'](["there's a cock up"], 1);
			}
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Digit', $p['tuple']($bases), $data);
	})();
	$m['Counter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'piscorebeta';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['alive'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'n');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCount'] = $method;
		$method = $pyjs__bind_method2('setCount', function(x) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}

			self['n'] = $p['float_int'](x);
			return null;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['setCount'] = $method;
		$method = $pyjs__bind_method2('incCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add3,$add4;
			self['n'] = $p['__op_add']($add3=$p['float_int']($p['getattr'](self, 'n')),$add4=1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['incCount'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Counter', $p['tuple']($bases), $data);
	})();
	$m['floor'] = function(n) {
		var $sub2,$sub1,$mod2,$mod1;
		return $p['__op_sub']($sub1=n,$sub2=(typeof ($mod1=n)==typeof ($mod2=1) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2)));
	};
	$m['floor']['__name__'] = 'floor';

	$m['floor']['__bind_type__'] = 0;
	$m['floor']['__args__'] = [null,null,['n']];
	$m['Matrixform'] = function(N, line_size, line_num) {
		var final_row,$iter3_array,$iter1_iter,$mod4,$mod3,$iter2_type,row,$iter3_idx,matrix,$iter2_iter,$iter3_nextval,$iter3_iter,$iter1_array,$mul4,$add7,$iter1_nextval,$iter2_idx,$add10,$iter3_type,$div2,$div1,$mul3,$mul2,$mul1,$iter2_nextval,$iter1_type,f,i,k,l,q,$add6,$iter1_idx,$add5,y,x,$add8,$add9,$iter2_array;
		k = N;
		x = line_size;
		l = line_num;
		y = $p['float_int']($m['floor']((typeof ($div1=k)==typeof ($div2=x) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2))));
		row = $p['list']([]);
		final_row = $p['list']([]);
		matrix = $p['list']([]);
		$iter1_iter = $p['range'](0, y);
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			q = $iter1_nextval['$nextval'];
			$iter2_iter = $p['range'](1, $p['__op_add']($add5=x,$add6=1));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				row['append']($p['getattr']($m['Digit']($p['float_int']($p['__op_add']($add7=i,$add8=(typeof ($mul1=x)==typeof ($mul2=q) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))))), 'val'));
			}
			matrix['append'](row);
			row = $p['list']([]);
		}
		if ($p['bool'](!$p['op_eq']((typeof ($mod3=k)==typeof ($mod4=x) && typeof $mod3=='number'?
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
			$p['op_mod']($mod3,$mod4)), 0))) {
			$iter3_iter = $p['range']((typeof ($mul3=y)==typeof ($mul4=x) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)), k);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				f = $iter3_nextval['$nextval'];
				final_row['append']($p['getattr']($m['Digit']($p['__op_add']($add9=f,$add10=1)), 'val'));
			}
			matrix['append'](final_row);
		}
		while ($p['bool'](($p['cmp']($p['len'](matrix), line_num) == 1))) {
			matrix['pop'](0);
		}
		return matrix;
	};
	$m['Matrixform']['__name__'] = 'Matrixform';

	$m['Matrixform']['__bind_type__'] = 0;
	$m['Matrixform']['__args__'] = [null,null,['N'],['line_size'],['line_num']];
	$m['toString'] = function(Matrix_row) {
		var $add12,$iter4_nextval,element,$iter4_idx,numbers,$iter4_type,$iter4_array,$iter4_iter,$add11;
		numbers = '';
		$iter4_iter = Matrix_row;
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			element = $iter4_nextval['$nextval'];
			numbers = $p['__op_add']($add11=numbers,$add12=element);
		}
		return numbers;
	};
	$m['toString']['__name__'] = 'toString';

	$m['toString']['__bind_type__'] = 0;
	$m['toString']['__args__'] = [null,null,['Matrix_row']];
	$m['write'] = function(msg, fontObj) {
		var font_colour,mytext;
		font_colour = $p['tuple']([99, 99, 99]);
		mytext = fontObj['render'](msg, true, font_colour);
		mytext = mytext['convert_alpha']();
		return mytext;
	};
	$m['write']['__name__'] = 'write';

	$m['write']['__bind_type__'] = 0;
	$m['write']['__args__'] = [null,null,['msg'],['fontObj']];
	$m['toScreen'] = function(N, line_size, line_num) {
		var $iter5_nextval,$iter5_idx,nums,$iter5_array,$add14,$add15,$add16,$iter5_iter,numbers,text_width,$add13,y,x,text_height,$iter5_type,row;
		text_height = 60;
		text_width = 150;
		nums = $m['Matrixform'](N, line_size, line_num);
		y = 30;
		x = $p['__op_add']($add13=text_width,$add14=40);
		$iter5_iter = nums;
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			row = $iter5_nextval['$nextval'];
			numbers = $m['write']($m['toString'](row), (typeof fontObj == "undefined"?$m['fontObj']:fontObj));
			$m['screen']['blit'](numbers, $p['tuple']([x, y]));
			y = $p['__op_add']($add15=y,$add16=text_height);
		}
		return null;
	};
	$m['toScreen']['__name__'] = 'toScreen';

	$m['toScreen']['__bind_type__'] = 0;
	$m['toScreen']['__args__'] = [null,null,['N'],['line_size'],['line_num']];
	$m['restart'] = function() {
		var linefirst,key1,$add17,$add18,key2;
		$m['screen']['blit']((typeof background == "undefined"?$m['background']:background), $p['tuple']([0, 0]));
		linefirst = $m['write']($p['__op_add']($add17=$p['chr'](960),$add18='=3.'), (typeof fontObj == "undefined"?$m['fontObj']:fontObj));
		$m['screen']['blit'](linefirst, $p['tuple']([(typeof x == "undefined"?$m['x']:x), (typeof y == "undefined"?$m['y']:y)]));
		$m['n']['setCount'](1);
		key1 = $p['getattr']($m['Digit']($m['n']['getCount']()), 'key');
		key2 = $p['getattr']($m['Digit']($m['n']['getCount']()), 'key_num');
		return null;
	};
	$m['restart']['__name__'] = 'restart';

	$m['restart']['__bind_type__'] = 0;
	$m['restart']['__args__'] = [null,null];
	$m['setup'] = function() {
		var font_size,font_colour,clock,text,screen,background,linefirst,$add19,bg_col,$add20,font_path,mainloop,FPS,$div3,font,textpos,$div4;
		$m['pygame']['init']();
		screen = $m['pygame']['display']['set_mode']($p['tuple']([470, 500]));
		$m['pygame']['display']['set_caption']('PiScore');
		$m['pygame']['mouse']['set_visible'](1);
		$m['pygame']['font']['init']();
		font_path = './KGLifeisMessy.ttf';
		font_size = 80;
		font_colour = $p['tuple']([99, 99, 99]);
		$m['fontObj'] = $m['pygame']['font']['SysFont']('none', font_size);
		bg_col = $p['tuple']([255, 255, 255]);
		background = $m['pygame']['Surface'](screen['get_size']());
		background = background['convert']();
		background['fill'](bg_col);
		font = $m['pygame']['font']['Font'](null, 24);
		text = font['render']('Go as far as you can', 1, $p['tuple']([10, 10, 10]));
		textpos = $pyjs_kwargs_call(text, 'get_rect', null, null, [{'centerx':(typeof ($div3=background['get_width']())==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4))}]);
		background['blit'](text, textpos);
		screen['blit'](background, $p['tuple']([0, 0]));
		clock = $m['pygame']['time']['Clock']();
		mainloop = true;
		FPS = 60;
		$m['n'] = $m['Counter']();
		$m['n']['setCount'](1);
		$m['x'] = 40;
		$m['y'] = 30;
		linefirst = $m['write']($p['__op_add']($add19=$p['chr'](960),$add20='=3.'), $m['fontObj']);
		screen['blit'](linefirst, $p['tuple']([$m['x'], $m['y']]));
		return $p['tuple']([screen, background, $m['fontObj'], $m['n']]);
	};
	$m['setup']['__name__'] = 'setup';

	$m['setup']['__bind_type__'] = 0;
	$m['setup']['__args__'] = [null,null];
	$m['run'] = function() {
		var line_len,$or1,$iter6_idx,line_num,$iter6_type,key2,key1,$or2,$iter6_array,$mul6,$iter6_iter,$mul5,event,$iter6_nextval;
		line_len = 5;
		line_num = 4;
		key1 = $p['getattr']($m['Digit']($m['n']['getCount']()), 'key');
		key2 = $p['getattr']($m['Digit']($m['n']['getCount']()), 'key_num');
		$iter6_iter = $m['pygame']['event']['get']();
		$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
		while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
			event = $iter6_nextval['$nextval'];
			if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'KEYUP')))) {
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_ESCAPE')))) {
					$m['restart']();
				}
				else if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](event, 'key'), key1))?$or1:$p['op_eq']($p['getattr'](event, 'key'), key2)))) {
					if ($p['bool'](($p['cmp']($m['n']['getCount'](), (typeof ($mul5=line_num)==typeof ($mul6=line_len) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6))) == 1))) {
						$m['screen']['blit']((typeof background == "undefined"?$m['background']:background), $p['tuple']([0, 0]));
						$m['toScreen']($m['n']['getCount'](), line_len, line_num);
						$m['n']['incCount']();
					}
					else {
						$m['toScreen']($m['n']['getCount'](), line_len, line_num);
						$m['n']['incCount']();
					}
				}
				else {
					$m['restart']();
				}
			}
		}
		$m['pygame']['display']['flip']();
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null];
	var $tupleassign1 = $p['__ass_unpack']($m['setup'](), 4, null);
	$m['screen'] = $tupleassign1[0];
	$m['background'] = $tupleassign1[1];
	$m['fontObj'] = $tupleassign1[2];
	$m['n'] = $tupleassign1[3];
	$m['pygame']['display']['setup']($m['run']);
	return this;
}; /* end piscorebeta */


/* end module: piscorebeta */


/*
PYJS_DEPS: ['pyjsdl']
*/
