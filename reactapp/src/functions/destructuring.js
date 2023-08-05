function getUserIpDetails(userResponse = {}) {
      const {userIp = '0.0.0.0', userName} = userResponse;
        return [userName, userIp];
        }

        // console.log(getUserIpDetails(userResponse)); // ['test', '0.0.0.0']

        function getTopThree(studentMarks = []) {
          const [firstMark = null, secondMark = null, thirdMark = null] = studentMarks;
            return [firstMark, secondMark, thirdMark].sort();
            }

            // console.log(getTopThree([10, 20, 30])); // [10, 20, 30]
            // console.log(getTopThree([10])); // [10, null, null]

            export { getUserIpDetails,getTopThree};