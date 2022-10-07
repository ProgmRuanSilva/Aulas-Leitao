import $ from 'jquery'

const loadSuccessCallBack = []

export function loadSuccessCallBack(callback) {
    if(!loadSuccessCallBack.includes(callback)) {
        loadSuccessCallBack.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')
                
                loadSuccessCallBack.forEach(
                    callback => callback(data))
                loadIncludes(e)
            }
        })
    }) 
}

loadIncludes()