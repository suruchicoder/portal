function fetchTeamInfo() {
    var xhttpReq = new XMLHttpRequest();

                      xhttpReq.onreadystatechange = function() {

                      if (this.readyState == 4 && this.status == 200) {
                       console.log(this.responseText);
                         var response = this.responseText;
                         console.log(response);

};
                      xhttpReq.open("POST", "https://proxy-staging-external.handler.talk.to/go.to/fzeus/v5.0/authenticate");
                      xhttpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                      xhttpReq.send(JSON.stringify({email:email,password:pass}));

                     }
}