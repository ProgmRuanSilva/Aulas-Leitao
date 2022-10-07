import $ from 'jquery'

import { loadSuccessCallBack } from '../core/includes'

const duration = 400
//fiter 
function filterbyCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') === city
            || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration)
            $(this).parent().addClass('d-none')
        }
    })
}

$.fn.cityButtons = function () {

    const cityButtons = $('[wm-city-buttons]')

    const cities = new Set
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterbyCity(city))
        return btn
    })

    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterbyCity(null))
    btn.push(btnAll)

    const btnGrup = $('<div>').addClass(['btn-group'])
    btnGrup.append(btns)

    this.html(btnGrup)
    return this
}

loadSuccessCallBack(function(){
    $('[wm-city-buttons]').cityButtons()
})

$('[wm-city-buttons]').cityButtons