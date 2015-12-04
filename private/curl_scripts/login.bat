echo "this will invalidate existing token"
echo "control c if not sure"
pause


curl -X POST -k^
   -H "content-type:application/json"  ^
								-d  " { \"username\" : \"rlacey2@example.com\", \"password\" : \"pass123\" } "  ^
									https://localhost:3443/login