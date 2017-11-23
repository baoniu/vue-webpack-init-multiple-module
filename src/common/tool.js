/*
 所有工具类函数可以写在这里，引用：
 import * as _ from 'common/tool'
 _.functionName()
 */
export function isEmptyObject( obj ) {
    var name;
    for ( name in obj ) {
        return false;
    }
    return true;
}