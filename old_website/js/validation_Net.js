// validation

function chkdate(txtDOB)
{
	var r= Date.now();
	var s= document.frm.txtDOB.value;
	
	if(r<s)
	{
		alert("no");
	}
}
function check_null(a)
{ var flag;
	if(a=='')
	return false;
	for(var i=0;i<=a.length ;i++)
	{
		if(a.charAt(i) != " " && a.charAt(i)!='')
		{
		flag = 1;
		break;
		}
		else
		{
		flag=0;
		}


	}
	if(flag==1)
		return true;
	else
		return false;
}

// email

function ck_email(email)
   {
	if(email.length > 0)
	{
	    if (email.indexOf("@")==-1)
	    	{return false;}
	    if (email.indexOf(".")==-1)
	    	{return false;}
	    if (email.length<6)
	    	{return false;}
	    if(email.indexOf("@")==0)
	    	{return false;}

	 }
	 return true;
   }
// contact number

function isnum(field){
	var num=/^[0-9-'+'-',']*$/;
	if(!num.test(field.value))
	{
		alert("Please fill Contact No. in numbers");
		field.value=field.value.replace(/^[0-9-'+'-',']*$/);
	}
}

function valid() {
    // alert('hello');
    var doc = document.booking;
    if (document.getElementById("nights").value == "") {
        alert('Please select no. of Nights');
        document.getElementById("nights").focus();
        return false;
    }

    if (document.getElementById("datepicker").value == "" || document.getElementById("datepicker").value == "Check In") {
        alert('Please enter Check in Date');
        document.getElementById("datepicker").focus();
        return false;
    }
    if (document.getElementById("datepicker1").value == "" || document.getElementById("datepicker1").value == "Check Out") {
        alert('Please enter Check out Date');
        document.getElementById("datepicker1").focus();
        return false;
    }
    var r = document.getElementById("datepicker").value;
    var s = document.getElementById("datepicker1").value;
    if (Date.parse(r) >= Date.parse(s)) {
        alert("Check-out date can't be less then the Check-in date");
        document.getElementById("datepicker1").focus();
        return false;
    }

    if (document.getElementById("adults").value == "") {
        alert('Please select no. of Adults');
        document.getElementById("adults").focus();
        return false;
    }

    if (document.getElementById("child").value == "") {
        alert('Please select no. of Children');
        document.getElementById("child").focus();
        return false;
    }

 


    if (document.getElementById("title").value == "") {
        alert('Please select Title');
        document.getElementById("title").focus();
        return false;
    }

    if (document.getElementById("first_name").value == "" || document.getElementById("first_name").value == "First Name") {
        alert('Please enter your First Name');
        document.getElementById("first_name").focus();
        return false;
    }

    if (document.getElementById("last_name").value == "" || document.getElementById("last_name").value == "Last Name") {
        alert('Please enter your Last Name');
        document.getElementById("last_name").focus();
        return false;
    }
    if (check_null(document.getElementById("email").value) == "" || document.getElementById("email").value == "Email") {
        alert('Please enter your Email Id ');
        document.getElementById("email").focus();
        return false;
    }
    if (ck_email(document.getElementById("email").value) == "") {
        alert('Please enter valid Email Id ');
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("contact").value == "" || document.getElementById("contact").value == "Contact No.") {
        alert("Please enter your Contact No.");
        document.getElementById("contact").focus();
        return false;
    }
   
    if (document.getElementById("contact").value.length < 10) {
        alert("Please enter valid Contact No.");
        document.getElementById("contact").focus();
        return false;
    }
    if (document.getElementById("address").value == "" || document.getElementById("address").value == "Address") {
        alert("Please enter your Address");
        document.getElementById("address").focus();
        return false;
    }

    if (document.getElementById("country").value == "") {
        alert("Please select Country");
        document.getElementById("country").focus();
        return false;
    }
    
    
   
}