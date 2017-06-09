
!function(document, window, $, undefined) {

    $.fn.Tab = function() {
        this.each(function(i,obj){
            var $this = $(this),
                $obj = $(obj),
                $lis = $obj.find(".nav>li"),
                $cunt = $obj.find(".cunt div"),
                $evt = $this.attr('data-event') || 'click',
                temer;

                if($evt == 'mouseover'){
                    $lis.on('mouseover',function() {
                        var $this = $(this),
                            index = $this.index();
                            temer = setTimeout(function() {
                            run($this,index)
                        }, 500)
                    })
                        .on('mouseout', function () {
                            if(temer) {
                                clearTimeout(temer)
                            }
                        })

                } else{
                    $lis.on('click',function() {
                        var $this = $(this),
                            index = $this.index();
                            run($this,index);
                    })
                }

                function run($this,index) {
                    $this.addClass('blue').siblings().removeClass('blue');
                    $cunt.eq(index).show().siblings().hide();
                }

            });
    }

}(document, window, jQuery);