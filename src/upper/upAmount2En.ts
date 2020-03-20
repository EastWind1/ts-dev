
export class TranslateAmount2Upper{

    public upAmount2En(amount:any){
        const amountString = amount.toString();

        if(parseFloat(amountString) <= 0){
            return 'Zero Cents only';
        }
        const pointOfIndex = amountString.indexOf('.'); // 取小数点位置
        let lstr = '';
        let rstr = '';
        if(pointOfIndex > -1){ // 看是否有小数，如果有，则分别取左边和右边
            lstr = amountString.substring(0,pointOfIndex);
            rstr = amountString.substring(pointOfIndex+1);
        } else { // 否则就是全部
            lstr = amountString;
        }

        let leftStr = this.reverse(lstr); // 对左边的字串取反
        const arr = []; // 定义5个字串变量来存放解析出来的叁位一组的字串 ??
        switch(leftStr.length % 3){
            case 1:
                leftStr += '00';
                break;
            case 2:
                leftStr += '0';
                break;
        }
        
        let lm = ''; // 用来存放转换後的整数部分
        for (let i = 0; i < leftStr.length / 3; i++) {
            arr[i] = this.reverse(leftStr.substring(3 * i, 3 * i + 3)); // 截取第一个叁位
            if (arr[i] !== '000') { // 用来避免这种情况：1000000 = one million
                if (i != 0)
                    lm = this.trans3(arr[i]) + ' ' + this.parseMore(i.toString()) + ' ' + lm; // 加:
                // thousand、million、billion
                else
                    lm = this.trans3(arr[i]); // 防止i=0时， 在多加两个空格.
            } else
                lm += this.trans3(arr[i]);
        }

        let xs = ''; // 用来存放转换後小数部分
        if (pointOfIndex > -1){
            let transTwo =  this.trans2(rstr);
            if(transTwo == null || transTwo === ''){
                xs = '';
            }else{
                xs = 'and ' + transTwo + ' Cents '; // 小数部分存在时转换小数
            }
        }
        return lm.trim() + ' ' + xs + 'only';
    }

    private parseFirst(s){
        // 十以内的数字
    const SINGLE_NUM_ARR = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        return SINGLE_NUM_ARR[parseInt(s.substring(s.length - 1))];
    }
    private parseTeen(s){
        // 十几的数字
    const TEN_NUM_ARR = ['Ten', 'Eleven', 'Tweleve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen','Seventeen', 'Eighteen', 'Nineteen'];
        return TEN_NUM_ARR[parseInt(s)-10];
    }
    private parseTen(s){
        // 整十的数字
    const TEN_INTEGER_ARR = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        return TEN_INTEGER_ARR[parseInt(s.substring(0,1))-1];
    }
    private parseMore(s){
        const more = ['', 'Thousand', 'Million', 'Billion'];
        return more[parseInt(s)];
    }

    // 两位数处理
    private trans2(s){
        let value = '';
        // 判断位数
        if (s.length > 2)
            s = s.substring(0, 2);
        else if (s.length < 2)
            s = s + '0';

        if (s.startsWith('0')) // 07 - seven 是否小於10
            value = this.parseFirst(s);
        else if (s.startsWith('1')) // 17 seventeen 是否在10和20之间
            value = this.parseTeen(s);
        else if (s.endsWith('0')) // 是否在10与100之间的能被10整除的数
            value = this.parseTen(s);
        else
            value = this.parseTen(s) + ' ' + this.parseFirst(s);
        return value;
    }

    // 三位数处理
    private trans3(s){
        let value = '';
        if (s.startsWith('0')) // 是否小於100
            value = this.trans2(s.substring(1));
        else if (s.substring(1)==='00') // 是否被100整除
            value = this.parseFirst(s.substring(0, 1)) + ' Hundred';
        else
            value = this.parseFirst(s.substring(0, 1)) + ' Hundred and ' + this.trans2(s.substring(1));
        return value;
    }

    // 翻转字符串
    private reverse(s){
        return s.split('').reverse().join('');
    }
}
