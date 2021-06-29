
<?php
include 'RAC.html';
$server = "localhost";
$username = "root";
$password = "";
$dbname = "test1";

$conn = mysqli_connect($server , $username , $password , $dbname) ;

if(isset($_POST['submit'])){

	if(!empty($_POST['Motor1']) && !empty($_POST['Motor2']) && !empty($_POST['Motor3']) && !empty($_POST['Motor4']) && !empty($_POST['Motor5']) && !empty($_POST['Motor6'])) {

		$Motor1 = $_POST['Motor1'];
        $Motor2 = $_POST['Motor2'];
        $Motor3 = $_POST['Motor3'];
        $Motor4 = $_POST['Motor4'];
        $Motor5 = $_POST['Motor5'];
        $Motor6 = $_POST['Motor6'];

        $query = "insert into Motors(Motor1,Motor2,Motor3,Motor4,Motor5,Motor6) values('$Motor1','$Motor2','$Motor3','$Motor4','$Motor5','$Motor6')";

		$run = mysqli_query($conn,$query) or die(mysqli_error());
		if($run){
			echo "success";
		}
		else{
			echo "Not success";
		}

	}
	else{
		echo "all fields required";
	}
}
?>
