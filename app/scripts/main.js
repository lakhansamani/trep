$("#add-task").on('click',function(){

    var cnt=$("#counter").val();
    var task=$("#taskname").val();
		if(task==""){
			alert("Please enter a valid task name");
		}
		else{
			$("#task-list").append("<li class='unchecked'><input type='checkbox' id='"+(parseInt(cnt)+1)+"' class='checkboxClass' value='"+task+"'><label>"+task+"</label></li>");
		}
    $("#taskname").val("");
    $("#counter").val(parseInt(cnt)+1)
  });

  $(document).on('click','.checkboxClass',function(event){

    if($(this).prop("checked")){
      $(this).next('label').attr('style','text-decoration:line-through');
    }
    else{
      $(this).next('label').removeAttr('style');
    }
  });