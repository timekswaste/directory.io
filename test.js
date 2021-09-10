//Dont use btckey.space / btckey.online or washen.me !!!!


//I did a test added 2 privkeys with small amount of satoshis to test out this guy... and guess what, he took 1600+ and 1200+ satoshis!!!!


//I advise everyone to setup your own directory.io localy and use the source code they don't wanted to share...  Now i see whay they dont shared it !!!! they try to fish peoples who use their sites... If u find a key in their site it will sent alert to them aswell... Never even go in at thoose sites, next is to see if they have MITm code, so far i dident found yet.


//You can choose to view transactions or only final balance by channg the booth lines to :  final_balance or total_received .  I personally run it with total_received.
//here is the source:


<script>
(function() {
    {
        var _0x44e0x1 = document['querySelectorAll']('.list-group-item a[href*="blockchain"]');
        var _0x44e0x2 = [];
        for (var _0x44e0x3 in _0x44e0x1) {
            if (_0x44e0x1[_0x44e0x3]['href'] != undefined) {
                _0x44e0x2['push'](_0x44e0x1[_0x44e0x3]['href']['substring'](_0x44e0x1[_0x44e0x3]['href']['lastIndexOf']('/') + 1))
            }
        };
        addr = _0x44e0x2['slice'](0, 200);
        var _0x44e0x4 = 'http://blockchain.info/multiaddr?limit=0&cors=true&active=' + addr['join']('|');
        var _0x44e0x5 = new XMLHttpRequest();
        _0x44e0x5['open']('GET', _0x44e0x4, true);
        _0x44e0x5['onreadystatechange'] = function() {
            if (_0x44e0x5['readyState'] != 4) {
                return
            };
            var _0x44e0x6 = true;
            try {
                _0x44e0x6 = JSON['parse'](_0x44e0x5['responseText'])
            } catch (e) {};
            if (!_0x44e0x6 || !_0x44e0x6['addresses']) {
                return
            };
            var _0x44e0x7 = true;
            for (var _0x44e0x3 in _0x44e0x6['addresses']) {
                var _0x44e0x8 = _0x44e0x6['addresses'][_0x44e0x3];
                var _0x44e0x9 = document['querySelector']('.list-group-item a[href*="' + _0x44e0x8['address'] + '"]');
                if (_0x44e0x9) {
                    var _0x44e0xa = document['createElement']('span');
                    _0x44e0xa['className'] = _0x44e0x8['total_received'] == 0 ? 'label label-success' : 'label label-success';
                    _0x44e0xa['innerText'] = parseFloat((_0x44e0x8['total_received'] * 0.00000001)['toFixed'](12));
                    _0x44e0x9['parentNode']['insertBefore'](_0x44e0xa, _0x44e0x9['nextSibling']);
                    if (_0x44e0xa['innerText'] != 0) {
                        alert('You found a Transaction!!')
                    }
                }
            }
        };
        _0x44e0x5['send']()
    }
})()
</script>
