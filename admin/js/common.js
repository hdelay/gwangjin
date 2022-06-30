$(document).ready(function(){
    /* menu */
    // 2depth open
    var menuBtn = $('.gnb>ul>li>a')
    menuBtn.click(function(){
        var depth = $(this).next();
        var depth3 = $(this).next().find('ul');

        
        if(depth.hasClass('on')){
            depth.removeClass('on');
            $(this).find('.menuMore').removeClass('active');
            $(this).removeClass('focus');
        } else {
            $('.gnb>ul>li>ul').removeClass('on');
            depth.addClass('on');
            $('.menuMore').removeClass('active');
            $(this).find('.menuMore').addClass('active');
            $('.gnb>ul>li>a').removeClass('focus'); 
            $(this).addClass('focus');
        }
   });
   // 3depth open
   $('.gnb>ul>li>ul>li>a').click(function(){
        if($(this).next().hasClass('on')){
            $(this).next().removeClass('on');
            $(this).find('.menuMore').removeClass('active');
            $(this).removeClass('focus');
        } else {
            $('.gnb>ul>li>ul>li>ul').removeClass('on');
            $(this).next().addClass('on');
            $('.gnb>ul>li>ul>li>a.menuMore').removeClass('active');
            $(this).find('.menuMore').addClass('active');
            $('.gnb>ul>li>ul>li>a').removeClass('focus'); 
            $(this).addClass('focus');
        }
    });


    /* layerPopup */
    $('.popupBtn').click(function(){
        $('.layerPopup').show();
        $('.popDim').show();
        $('.popClose a, .cancle').click(function(e){
            $('.layerPopup').hide();
            $('.popDim').hide();
            return false;
        });
        
        // 외부영역 클릭 시 팝업 닫기
        $(document).mouseup(function (e){
            var LayerPopup = $(".layerPopup");
            if(LayerPopup.has(e.target).length === 0){
                LayerPopup.hide();
                $('.popDim').hide(); 
            }
        });
        return false;
    });
    
    /* modalPopup */
    
    $('.modalBtn001').click(function(){
        $('.modal001').show();
        $('.modalDim').show();
        
        modal001Set();
        
        return false;
    });
    $('.modalBtn002').click(function(){
        $('.modal002').show();
        $('.modalDim').show();
        
        return false;
    });
    $('.modalBtn003').click(function(){
        $('.modal003').show();
        $('.modalDim').show();
        
        return false;
    });
    
    // 닫기
	$('.modalClose, .modalClose2').click(function(e){
        $('.modalPopup').hide();
        $('.modalDim').hide();
        return false;
    });
    
    // 외부영역 클릭 시 팝업 닫기
    /*
    $(document).mouseup(function (e){
        var modalPopup = $(".modalPopup");
        if(modalPopup.has(e.target).length === 0){
            modalPopup.hide();
            $('.modalDim').hide(); 
        }
    });
    */
    
    /* file */
    $(function(){
		$('.upload_text').val('');
		$('.inputFile').change(function(){
			var i = $(this).val();
			$('.upload_text').val(i);
		});
	});
	

    /* datepicker */
    $( ".datepicker" ).datepicker({
        showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다. 
        buttonImage: "/images/ico_calendar.png", // 버튼 이미지 
        buttonImageOnly: true, // 버튼에 있는 이미지만 표시한다. 
        //changeMonth: true,  월을 바꿀수 있는 셀렉트 박스를 표시한다. 
        //changeYear: true,  년을 바꿀 수 있는 셀렉트 박스를 표시한다. 
        minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다. 
        nextText: '다음 달', // next 아이콘의 툴팁. 
        prevText: '이전 달', // prev 아이콘의 툴팁. 
        stepMonths: 1, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가. 
        //yearRange: 'c-100:c+10',  년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가. 
        //showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다. 
        //currentText: 'today' , // 오늘 날짜로 이동하는 버튼 패널 
        //closeText: '닫기', // 닫기 버튼 패널 
        dateFormat: "yy-mm-dd", // 텍스트 필드에 입력되는 날짜 형식. 
        showAnim: "slide", //애니메이션을 적용한다. 
        showMonthAfterYear: true, // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], // 요일의 한글 형식. 
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
    });

    $.datepicker.setDefaults($.datepicker.regional['ko']); 
    $( ".startDate" ).datepicker({ 
        //changeMonth: true, 
        //changeYear: true, 
        showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다. 
        buttonImage: "/images/ico_calendar.png", // 버튼 이미지 
        nextText: '다음 달', 
        prevText: '이전 달',
        showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], 
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
        dateFormat: "yy-mm-dd", 
        showAnim: "slide", //애니메이션을 적용한다. 
        //maxDate: 0, // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가) 
        onClose: function( selectedDate ) { 
            //시작일(startDate) datepicker가 닫힐때 //종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정 
            $(".endDate").datepicker( "option", "minDate", selectedDate ); 
        } 
    }); 
    $(".endDate").datepicker({ 
        //changeMonth: true, 
        //changeYear: true, 
        showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다. 
        buttonImage: "/images/ico_calendar.png", // 버튼 이미지 
        nextText: '다음 달', 
        prevText: '이전 달', 
        showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], 
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
        dateFormat: "yy-mm-dd", 
        showAnim: "slide", //애니메이션을 적용한다. 
        //maxDate: 0, // 선택할수있는 최대날짜, ( 0 : 오늘 이후 날짜 선택 불가) 
        onClose: function( selectedDate ) { 
            // 종료일(endDate) datepicker가 닫힐때 
            // 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정 
            $("#startDate").datepicker( "option", "maxDate", selectedDate ); 
        } 
    });
});