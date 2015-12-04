echo token may have expired

curl -X GET -k ^
   -H "content-type:application/json"  ^
	 -H "x-access-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NDk4Njk0NTcxMzMsInVzZXIiOnsibmFtZSI6InJsYWNleTIiLCJyb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6InJsYWNleTJAZXhhbXBsZS5jb20ifX0.h-D_gyBQBvqiuddNFIRK-qKh6hQf1PJh_qlsTC3mpps" ^
	 -H "x-key:rlacey2@example.com" ^
	 https://localhost:3443/api/v1/admin/users
					 