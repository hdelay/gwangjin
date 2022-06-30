/*
 * AJAX
 */
function fnCallAjax(callType, url, returnDataType, paramData, callBackFn){

	$.ajax({
		url : url,
		type : callType,
		dataType: returnDataType,
		data : paramData,
		success: function(data){
			//console.log(">> in success");
		},
		error: function(xhr,status,error){
			//console.log(">> in error");
		},
		complete: function(data){
			//console.log(">> in complete");
			//console.log(data);
			callBackFn(data);
		}
	});
}

function menuCall(menuNo,arg){
	if(menuNo == "201" && arg == ""){
		alert("로그인 후 이용해 주세요.");
		return;
	}
	
	location.href = "/contents?menuNo="+menuNo;
}

function isEmail(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

//주소팝업
function goJusoPopup(idx){
	// 주소검색을 수행할 팝업 페이지를 호출합니다.
	// 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
	var pop = window.open("/jusoPopup?popupIdx=" + idx,"pop","width=570,height=420, scrollbars=yes, resizable=yes");

	// 모바일 웹인 경우, 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrMobileLinkUrl.do)를 호출하게 됩니다.
    //var pop = window.open("/popup/jusoPopup.jsp","pop","scrollbars=yes, resizable=yes");
}

//주소팝업
function jusoCallBack(roadFullAddr,popupIdx,entX,entY,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr,
		zipNo, admCd, rnMgtSn, bdMgtSn,detBdNmList,bdNm,bdKdcd,siNm,sggNm,emdNm,liNm,rn,udrtYn
		,buldMnnm,buldSlno,mtYn,lnbrMnnm,lnbrSlno,emdNo){
	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
	/* document.form.roadFullAddr.value = roadFullAddr;
	document.form.roadAddrPart1.value = roadAddrPart1;
	document.form.roadAddrPart2.value = roadAddrPart2;
	document.form.addrDetail.value = addrDetail;
	document.form.engAddr.value = engAddr;
	document.form.jibunAddr.value = jibunAddr;
	document.form.zipNo.value = zipNo;
	document.form.admCd.value = admCd;
	document.form.rnMgtSn.value = rnMgtSn;
	document.form.bdMgtSn.value = bdMgtSn;
	document.form.detBdNmList.value = detBdNmList; */
	/** 2017년 2월 추가제공 **/
/* 	document.form.bdNm.value = bdNm;
	document.form.bdKdcd.value = bdKdcd;
	document.form.siNm.value = siNm;
	document.form.sggNm.value = sggNm;
	document.form.emdNm.value = emdNm;
	document.form.liNm.value = liNm;
	document.form.rn.value = rn;
	document.form.udrtYn.value = udrtYn;
	document.form.buldMnnm.value = buldMnnm;
	document.form.buldSlno.value = buldSlno;
	document.form.mtYn.value = mtYn;
	document.form.lnbrMnnm.value = lnbrMnnm;
	document.form.lnbrSlno.value = lnbrSlno; */
	/** 2017년 3월 추가제공 **/
	/* document.form.emdNo.value = emdNo; */

	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
	console.log("roadFullAddr:" + roadFullAddr);
	console.log("roadAddrPart1:" +  roadAddrPart1);
	console.log("roadAddrPart2:" +  roadAddrPart2);
	console.log("addrDetail:" +  addrDetail);
	console.log("engAddr:" +  engAddr);
	console.log("jibunAddr:" +  jibunAddr);
	console.log("zipNo:" +  zipNo);
	console.log("admCd:" +  admCd);
	console.log("rnMgtSn:" +  rnMgtSn);
	console.log("bdMgtSn:" +  bdMgtSn);
	console.log("detBdNmList:" +  detBdNmList);
	/** 2017년 2월 추가제공 **/
	console.log("bdNm:" +  bdNm);
	console.log("bdKdcd:" +  bdKdcd);
	console.log("siNm:" +  siNm);
	console.log("sggNm:" + sggNm);
	console.log("emdNm:" +  emdNm);
	console.log("liNm:" +  liNm);
	console.log("rn:" +  rn);
	console.log("udrtYn:" +  udrtYn);
	console.log("buldMnnm:" +  buldMnnm);
	console.log("buldSlno:" +  buldSlno);
	console.log("mtYn:" +  mtYn);
	console.log("lnbrMnnm:" +  lnbrMnnm);
	console.log("lnbrSlno:" +  lnbrSlno);
	/** 2017년 3월 추가제공 **/
	console.log("emdNo:" +  emdNo);
	console.log("entX:" +  entX);
	console.log("entY:" +  entY);

	//fn_geocode(roadFullAddr);
	
	$('#adres' + popupIdx).val(roadFullAddr);
	$('#adresCode').val(admCd);
	$('#zip').val(zipNo);
	//주소 나눠서 저장하기용 
	$('#adres').val(roadAddrPart1);
	$('#elnadr').val(addrDetail);
}