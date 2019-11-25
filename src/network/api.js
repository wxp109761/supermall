import * as data from '../network/data'

export function getGoods(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.goodsList);
	    }, 1000)
	})

}