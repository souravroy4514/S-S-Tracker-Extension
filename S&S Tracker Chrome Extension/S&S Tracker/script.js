var isWrike = document.location.host == "www.wrike.com";

if (isWrike) {
    var interval = setInterval(CheckSome, 4000);
    function CheckSome() {
        (document.querySelector('task-scrollable-container') != null) ? init() : console.log("I am still loading");
    }
    function init() {
        clearInterval(interval);
        var c = document.querySelector('task-scrollable-container')
        const injectElement = document.createElement('div');
        injectElement.className = 'checkbox-container';
        injectElement.innerHTML = '<button id="submit">Submit Survey</button>'
        c.prepend(injectElement);
        console.log('I have appended');
        document.getElementById('submit').addEventListener('click', popup);
            function popup(){
            var ext=document.querySelector('.pop-upbox');
            if(ext!=null){
            ext.remove();
            } else {
                var container=document.querySelector('.entity-view-element')
                const injectpopup = document.createElement('div');
                injectpopup.className='pop-upbox';
                injectpopup.innerHTML = '<div id="close-container"><div><button id="close-btn">X</button></div></div><div id="pop-up-container"><div class="popup-title"><h1>S&S Tracker</h1></div><div class="ticket-id"><label for="ticket-number">Ticket Number</label><br><input type="text" name="ticket-number" id="ticket-number" /></div><div class="developer"><label for="developer-name">Developer Name</label><br><input type="text" name="developer-name" id="developer-name" /></div><div class="category"><div class="category-heading"><h2><label for="category">Category</label></h2></div></div><div id="form"><form><input type="radio" name="Report" value="Report OOD" id="reportood"><label for="reportood">Report OOD</label><br><input type="radio" name="Report" value="Report Clarification" id="clarification"><label for="clarification">Report Clarification</label><br><input type="radio" name="Report" value="Report Issue" id="issue"><label for="issue">Report Issue</label><br><input type="radio" name="Report" value="Report ND" id="ND"><label for="ND">Report ND</label><br><input type="radio" name="Report" value="Report Featured Task" id="featuredtask"><label for="featuredtask">Report Featured Task</label><br><input type="radio" name="Report" value="Report Request Reason" id="request-reason"><label for="request-reason">Report Request Reason</label><br><div id="drop-down"><div id="ood-option"><select><option value="OOD Option1">Report OOD Option 1</option><option value="OOD Option2">Report OOD Option 2</option><option value="OOD Option3">Report OOD Option 3</option></select></div><div id="clarification-option"><select><option value="Clarification Option1">Clarification Option 1</option><option value="Clarification Option2">Clarification Option 2</option><option value="Clarification Option3">Clarification Option 3</option></select></div><div id="issue-option"><select><option value="Issue Option1">Issue Option 1</option><option value="Issue Option2">Issue Option 2</option><option value="Issue Option3">Issue Option 3</option></select></div><div id="nd-option"><select><option value="ND Option1">ND Option 1</option><option value="ND Option2">ND Option 2</option><option value="ND Option3">ND Option 3</option></select></div><div id="featured"><select><option value="Featured Option1">Featured Task Option 1</option><option value="Featured Option2">Featured Task Option 2</option><option value="Featured Option3">Featured Task Option 3</option></select></div><div id="request-reason-option"><select><option value="Request Reason Option1">Request Reason Option 1</option><option value="Request Reason Option2">Request Reason Option 2</option><option value="Request Reason Option3">Request Reason Option 3</option></select></div></div><div class="text-area"><label for="comments">Additional Comments</label><br><textarea id="comments" name="comments" rows="4" cols="50"></textarea></div></form></div><div id="submit-btn-container"><button id="submit-btn">Submit</button></div></div>';
                container.prepend(injectpopup);
                console.log('The Pop Up is appended');
                document.getElementById('close-btn').addEventListener('click', closepopup);
                function closepopup(){
                var popupbox=document.querySelector('.pop-upbox');
                popupbox.remove();
                }
                var ticketnum=document.querySelector('.status-bar__author .task-author__task-id').innerText;
                document.getElementById('ticket-number').value=ticketnum;
                const names = document.querySelectorAll('.inline-contact-list-name');
                names.forEach(div => {
                const text = div.textContent;
                console.log(text);
                var devname=document.getElementById('developer-name');
                devname.value+=text + `, `
                document.getElementById('reportood').addEventListener('click',showooddropdown);
                document.getElementById('clarification').addEventListener('click',showclarificationdropdown);
                document.getElementById('issue').addEventListener('click',showissuedropdown);
                document.getElementById('ND').addEventListener('click',showNDdropdown);
                document.getElementById('featuredtask').addEventListener('click',showfeaturedtaskdropdown);
                document.getElementById('request-reason').addEventListener('click',showrequestreasondropdown);
                
                function showooddropdown(){
                    document.getElementById('ood-option').style.display='block';
                    document.getElementById('clarification-option').style.display='none';
                    document.getElementById('issue-option').style.display='none';
                    document.getElementById('nd-option').style.display='none';
                    document.getElementById('featured').style.display='none';
                    document.getElementById('request-reason-option').style.display='none';
                    document.querySelector('.text-area').style.display='block';
                }
                function showclarificationdropdown(){
                    document.getElementById('clarification-option').style.display='block';
                    document.getElementById('ood-option').style.display='none';
                    document.getElementById('issue-option').style.display='none';
                    document.getElementById('nd-option').style.display='none';
                    document.getElementById('featured').style.display='none';
                    document.getElementById('request-reason-option').style.display='none';
                    document.querySelector('.text-area').style.display='block';
                }
                function showissuedropdown(){
                    document.getElementById('issue-option').style.display='block';
                    document.getElementById('clarification-option').style.display='none';
                    document.getElementById('ood-option').style.display='none';
                    document.getElementById('nd-option').style.display='none';
                    document.getElementById('featured').style.display='none';
                    document.getElementById('request-reason-option').style.display='none';
                    document.querySelector('.text-area').style.display='block';
                }
                function showNDdropdown(){
                    document.getElementById('nd-option').style.display='block';
                    document.getElementById('issue-option').style.display='none';
                    document.getElementById('clarification-option').style.display='none';
                    document.getElementById('ood-option').style.display='none';
                    document.getElementById('request-reason-option').style.display='none';
                    document.getElementById('featured').style.display='none';
                    document.querySelector('.text-area').style.display='block';
                }
                function showfeaturedtaskdropdown(){
                    document.getElementById('featured').style.display='block';
                    document.getElementById('clarification-option').style.display='none';
                    document.getElementById('ood-option').style.display='none';
                    document.getElementById('issue-option').style.display='none';
                    document.getElementById('nd-option').style.display='none';
                    document.getElementById('request-reason-option').style.display='none';
                    document.querySelector('.text-area').style.display='block';
                }
                function showrequestreasondropdown(){
                    document.getElementById('request-reason-option').style.display='block';
                    document.getElementById('clarification-option').style.display='none';
                    document.getElementById('ood-option').style.display='none';
                    document.getElementById('issue-option').style.display='none';
                    document.getElementById('nd-option').style.display='none';
                    document.getElementById('featured').style.display='none';
                    document.querySelector('.text-area').style.display='block';
                }
                
            });
            }
        }
    }  
}