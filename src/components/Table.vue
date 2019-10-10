<template id="table">
<div>
    
<h3>API Testing Home Page</h3>
<!-- might add search based on column -->
<section display: flex>
	<!-- <select v-model="columns4">
    <option :value="null">No Column Filter</option>
    <option v-for="col in cols" :key="col">{{ col }}</option>
  </select> --> 
<input
  placeholder="Find"
  v-model="search"
  size="mini"
  class="d-flex flex-row mb-6"
  />
<el-button type="primary" icon="el-icon-search" @click="filterBySearch()">Search</el-button>

</section>

<section>
	<h6>Add new api </h6>
        <label for="title">AddList:</label>
        <input type="text" v-model="todo" @keyup.enter="addTodo" />
</section>
	
<table class="w3-table-all w3-hoverable" ref="dataTable" :data="postList">
	
		<tr>
		<th>Url Name</th>
		
		<th>Description</th>
		<th>Check</th>
		<th>Delete</th>
		</tr>

		<tr v-for="(item, index) in todoList" :key="index" placeholder="todoList">
			<th><button>EXAMPLE</button></th>
  			<th>{{item}}</th>
  			<th><i class="el-icon-success"></i>
						<i class="el-icon-error"></i> </th>
			<th><button @click="deleteTodo(index,false)"><i class="el-icon-delete"></i></button></th>
		</tr>

		<tr >
				<th><input type="text" value="http://surveys.healthinteract.com.au/s/CFTRtest/" id="testURL" size="100" />
				<button onclick="handleURL();">dasd</button>
				</th>
				<th>API Description <button @click="showDemo()">Show More</button>
				<tr v-if="show">
            <td colspan="6"  class="hiddenRow"><div id="demo5" class="accordian-body collapse" style="dark blue: green; font-size: 20px;">
				handleURL()<br>
	{   localStorage.setItem("com-demobrochure-html-URLTester--lastUsedURL",document.getElementById('testURL').value);<br>
		document.location = document.getElementById('testURL').value;	}</div></td>
        </tr>	</th> 
				<th><label index="1">
						<i class="el-icon-success" id ='1' @click="toggle(1)" ></i>
						<i class="el-icon-error" id='1' @click="toggle(1)" ></i> 
					  </label>
				</th>
		</tr>

		<!-- Demo for search -->
		<!-- <tr v-for="(post, index) in filteredList" :key="index">
        <th>{{ post.link }}<button @click="handleGetAppInfo();">ni-action:appinfo</button></th>
        <th>{{ post.title }}</th>
		<th><label>
					<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
					<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
			</label>
		</th>
		<th><button @click="deleteTodo(index,false)"><i class="el-icon-delete"></i></button></th>
		</tr> -->
		<!--  -->

		<tr >
				<th><button @click="handleGetAppInfo();">asdasd</button></th>
				<th>asdasd</th> 
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
    <tr >
				<th><button @click="handleEnableBack();">ni-action:enableback</button></th>
				<th>Get Information</th> 
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
    <tr >
				<th><button @click="handleClose();">ni-action:close</button></th>
				<th>Get Information</th> 
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
    <tr>
				<th><button @click="handleGetAuthToken();">ni-action:getauthtoken</button></th>
				<th>Get Information</th> 
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
    <tr>
				<th><button @click="handleReGetAuthToken();">ni-action:regetauthtoken</button></th>
				<th>Get Information</th> 
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
    <tr>
				<th><button @click="handleBarcode();">ni-action:barcode</button></th>
				<th>Get Information</th> 
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
    <tr>
				<th><button @click="handleEmailTo();">basic mailto</button></th>
				<th>Get Information</th> 
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
    <tr>
				<th><button @click="handleAdvancedEmailTo();">advanced (file config) mailto</button></th>
				<th>Get Information</th>  
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
     <tr>
				<th><button @click="handleAdvancedJSONEmailTo();">advanced (base64(json) config) mailto</button></th>
				<th>Get Information</th>  
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
		 <tr>
				<th><input type="text" value="/TestPing" placeholder="/TestPing" id="testAnalyticsID" size="100" />
				<button @click="handlePingAnalytics();">ni action</button></th>
				<th> Testing Custom Ping Analytics for SAM<br>
	eg: ni-action:pinganalytics?id=someString<br /><br />

	"Product Information Page" -> "ni-action:pinganalytics?id=Product%20Information%20Page" -> into SAM should be "Product Information Page"</th>  
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>
		<tr>
				<th><button @click="handlePingAnalytics();">advanced (base64(json) config) mailto</button></th>
				<th>Get Information</th>  
				<th><label>
						<i class="el-icon-success" @click="toggle()" v-if="isSuccess"></i>
						<i class="el-icon-error" @click="toggle()" v-if="!isSuccess"></i> 
					  </label>
				</th>
		</tr>

		<tr v-for="(i, index) in 40" :key="index">
		<tr v-for="(item, index) in API_Object" :key="index" placeholder="todoList" >
			<th><button @click="i();">{{item.name}}</button></th>
  			<th>{{item.des}}</th>
  			<th><i class="el-icon-success"  @click="toggle(item.check)" v-if="isSuccess"></i>
				<i class="el-icon-error" @click="toggle(item.check)" v-if="!isSuccess"></i> </th>
			<th><button @click="deleteTodo(index,false)"><i class="el-icon-delete"></i></button></th>
		</tr>
		</tr>

	</table>	
	<br />	
    </div>
   
</template>


<script>

import { mapMutations } from 'vuex';
import { mapMultiRowFields } from 'vuex-map-fields';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import Vuetable from 'vuetable-2/src/components/Vuetable';


// class Post {
//   constructor(title, link) {
//     this.title = title;
//     this.link = link;  
//   }
// }

export default {

name: 'table',
components: {
    Vuetable,
  },

mounted() {
    if(localStorage.getItem('todoList')) {
      try {
        this.todoList = JSON.parse(localStorage.getItem('todoList'));
      } catch(e) {
        localStorage.removeItem('todoList');
      }
    }
  },

data(){
    return{
		self: this,
		search: '',
		todo: null,
    	todoList: [],
		todoLen: 0,
        isSuccess: false,
		show: false,

		API_Object:[
			  {name: 'Ryu', des: 'Vue Components', show: false, check: false},
              {name: 'Crystal', des: 'HTML Wizardry', show: false, check: false},
              {name: 'Hitoshi', des: 'Click Events', show: false, check: false}, 
              {name: 'Tango', des: 'Conditionals', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
			  {name: 'Kami', des: 'Webpack', show: false, check: false},
              {name: 'Yoshi', des: 'Data Diggin', show: false, check: false}
		],

		// postList : [
      	// 	   new Post(
        // 		'Api_action1', 
        // 		'Des and demo', 
		// 	  ),
		// 	  new Post(
        // 		'Api_action2', 
        // 		'Des and demo', 
		// 	  ),
		// 	  new Post(
        // 		'Api_action3', 
        // 		'Des and demo', 
		// 	  ),
		// 	  new Post(
		// 		  'ni-action:appinfo',
		// 		  'Des'
		// 	  ),
		// ],

        columns4: [
         
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'API_Name',
                        key: 'API_Name',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="handleURL())">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        
                        }
                        
                    },
                    {
                        title: 'Description',
                        key: 'Description',
                        render (row, column, index) {
                            return `<strong>dadsasd</strong>`;
                        }
                    },
                     {
                        title: 'Operation',
                        key: 'Operation',
                        width: 150,
                        align: 'center',
                
                     }
                     ],
        // data:[
        //   {   API_Name: 'input',
        //       Description: 'The Alfred Hospital', 
        //       Operation: 'asdas',
        //   } 
        // ],
    }
},

methods: {

toggle(){
			// console.log(id)
			// var element = document.getElementById(id)
            this.isSuccess = !this.isSuccess
		},
		
showDemo(){
	this.show = !this.show
},
deleteTodo (index, done) {
  if(done){
    this.todoLen--
  }
  this.todoList.splice(index, 1)
  this.saveTodo();
},

addTodo () {
    if(!this.todo) return;
    this.todoList.push(this.todo)
    this.todoLen++
	this.todo = '';
	this.saveTodo();
  },

  saveTodo() {
      let parsed = JSON.stringify(this.todoList);
      localStorage.setItem('todoList', parsed);
    },

   1()
	{
		localStorage.setItem("com-demobrochure-html-URLTester--lastUsedURL",document.getElementById('testURL').value);
		document.location = document.getElementById('testURL').value;
		
  },

  2()
	{
		var lastURLData = localStorage.getItem("com-demobrochure-html-URLTester--lastUsedURL");
		
		if (lastURLData != null)
			document.getElementById('testURL').value = lastURLData;		
  },
  
  3()
		{
      document.location = "ni-action:appinfo?cb=cbAppInfo";
      
		
		},
	
	4(inAppInfo)
		{
			alert(JSON.stringify(inAppInfo, null, 2));		
    },
    5()
		{
			document.location = "ni-action:enableback";
		
    },
    
    6()
		{
			document.location = "ni-action:close";
		
	},
	
   7()
		{
			document.location = "ni-action:getauthtoken?cb=cbGetAuthToken";
		
		},
	
	8(inInfo)
		{
      alert(JSON.stringify(inInfo, null, 2));		
      
    },
    
    9()
		{
			document.location = "ni-action:regetauthtoken?cb=cbReGetAuthToken";
		
		},
	
	10(inInfo)
		{
			alert(JSON.stringify(inInfo, null, 2));		
    },
    
    11()
		{
			document.location = "ni-action:barcode?cb=cbBarcode";
		},
	
	12(inInfo)
		{
//			alert(JSON.stringify(inInfo, null, 2));		// dont know why this hands the app!?!
			
			document.getElementById("barcodeData").innerHTML = inInfo["data"];
    },
    
    13()
		{
			document.location = "mailto:peter@home.com&subject=testing%20123";
    },

    14()
		{
			document.location = "mailto:peter@home.com&subject=testing%20123&ni_email_cfg_file=my_email.config";
		
    },

    15()
		{
			/*
			{"type":"ecfg","version":"1","email_to" : "JSONuser@home.com","email_cc" : ["JSONanother@home.com", "JSONanother2@home.com"],"email_subject" : "JSON Email Subject","email_body" : "<html><head></head><body><strong>JSON Email body</strong><br />JSON Some stuff here</body></html>","email_attachments" : [{"path" : "attachments/my_attachment.pdf","mime_type" : "application/pdf"},{"path" : "attachments/my_image.jpg","mime_type" : "image/jpg"}]}
			
			equates to base64 
			
			eyJ0eXBlIjoiZWNmZyIsInZlcnNpb24iOiIxIiwiZW1haWxfdG8iIDogIkpTT051c2VyQGhvbWUuY29tIiwiZW1haWxfY2MiIDogWyJKU09OYW5vdGhlckBob21lLmNvbSIsICJKU09OYW5vdGhlcjJAaG9tZS5jb20iXSwiZW1haWxfc3ViamVjdCIgOiAiSlNPTiBFbWFpbCBTdWJqZWN0IiwiZW1haWxfYm9keSIgOiAiPGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxzdHJvbmc+SlNPTiBFbWFpbCBib2R5PC9zdHJvbmc+PGJyIC8+SlNPTiBTb21lIHN0dWZmIGhlcmU8L2JvZHk+PC9odG1sPiIsImVtYWlsX2F0dGFjaG1lbnRzIiA6IFt7InBhdGgiIDogImF0dGFjaG1lbnRzL215X2F0dGFjaG1lbnQucGRmIiwibWltZV90eXBlIiA6ICJhcHBsaWNhdGlvbi9wZGYifSx7InBhdGgiIDogImF0dGFjaG1lbnRzL215X2ltYWdlLmpwZyIsIm1pbWVfdHlwZSIgOiAiaW1hZ2UvanBnIn1dfQ==
			
			*/
			
			document.location = "mailto:peter@home.com&subject=testing%20123&ni_email_cfg_base64json=eyJ0eXBlIjoiZWNmZyIsInZlcnNpb24iOiIxIiwiZW1haWxfdG8iIDogIkpTT051c2VyQGhvbWUuY29tIiwiZW1haWxfY2MiIDogWyJKU09OYW5vdGhlckBob21lLmNvbSIsICJKU09OYW5vdGhlcjJAaG9tZS5jb20iXSwiZW1haWxfc3ViamVjdCIgOiAiSlNPTiBFbWFpbCBTdWJqZWN0IiwiZW1haWxfYm9keSIgOiAiPGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxzdHJvbmc+SlNPTiBFbWFpbCBib2R5PC9zdHJvbmc+PGJyIC8+SlNPTiBTb21lIHN0dWZmIGhlcmU8L2JvZHk+PC9odG1sPiIsImVtYWlsX2F0dGFjaG1lbnRzIiA6IFt7InBhdGgiIDogImF0dGFjaG1lbnRzL215X2F0dGFjaG1lbnQucGRmIiwibWltZV90eXBlIiA6ICJhcHBsaWNhdGlvbi9wZGYifSx7InBhdGgiIDogImF0dGFjaG1lbnRzL215X2ltYWdlLmpwZyIsIm1pbWVfdHlwZSIgOiAiaW1hZ2UvanBnIn1dfQ==";
		
    },
    
    16()
		{
			document.location = "ni-action:pinganalytics?id=" + encodeURI(document.getElementById('testAnalyticsID').value);
		},
  
    17()
		{
			document.location = "ni-action:pinganalytics?id=" + encodeURI(document.getElementById('testAnalyticsIDv2').value)
								 + '&sc=' + encodeURI(document.getElementById('testAnalyticsIDv2_SubComponent').value)
								 + '&ssc=' + encodeURI(document.getElementById('testAnalyticsIDv2_SubSubComponent').value);
    },
    
    18()
		{
			document.location = "ni-action:refreshmi?cid=123";
		
    },
    
    19()
		{
			document.location = "ni-action:setdata?key=foo&value=blah&cb=handleSetDataCallback";
		},
    
    20(success) {
			alert(JSON.stringify(success, null, 2));
			document.location = "ni-action:getdata?key=foo&cb=handleGetData";
		},
    
    21(inValueDict) {
			alert(JSON.stringify(inValueDict, null, 2));
    },

    22()
		{
			document.location = "ni-action:getdata?key=foo_gone&cb=handleGetDataNonexistantCallback";
		},
		
	23(inValueDict) {
			alert(JSON.stringify(inValueDict, null, 2));
    },
    
    24()
		{
			document.location = "ni-action:deldata?key=foo&cb=handleDelDataCallback";
		},
		
	25(success) {
			alert(JSON.stringify(success, null, 2));
			document.location = "ni-action:getdata?key=foo&cb=handleGetDataAfterDelete";
		},
		
	26(inValueDict) {
			alert(JSON.stringify(inValueDict, null, 2));
    },
    
    27()
		{
			document.location = "ni-action:listdatakeys?cb=handleListDataKeysCallback";
		},
		
	28(inValueDict) {
			alert(JSON.stringify(inValueDict, null, 2));
    },

    29()
		{
			document.location = "ni-action:postmessage?id=ShowChangePassword";
    },
    
    30()
		{
			document.location = "ni-action:postmessage?id=ShowUserProfile";
    },
    
    31()
		{
			document.location = "ni-action:postmessage?id=HideUserProfile";
    },

    32()
		{
			document.location = "ni-action:postmessage?id=Refresh";
    },
    33()
		{
			document.location = "ni-action:postmessage?id=CloseCurrentAsset";
    },
    
    34()
		{
			document.location = "ni-action:postmessage?id=AddCurrentAssetToFavourites";
		},

    35()
		{
			document.location = "ni-action:postmessage?id=GDPR.iCloud.optin";
    },
    
    36()
		{
			document.location = "ni-action:postmessage?id=GDPR.iCloud.optout";
    },
    
    36()
		{
			document.location = "ni-action:postmessage?id=GDPR.iCloud.export";
    },
    
    37()
		{
			document.location = "ni-action:postmessage?id=GDPR.iCloud.forgetme";
    },

    38()
		{
			document.location = "ni-action:postmessage?id=GDPR.GoogleAnalytics.optin";
    },
    
    39()
		{
			document.location = "ni-action:postmessage?id=GDPR.GoogleAnalytics.optout";
    },
    
    40()
		{
			document.location = "ni-action:postmessage?id=GDPR.GoogleAnalytics.export";
    },
    
    41()
		{
			document.location = "ni-action:postmessage?id=GDPR.GoogleAnalytics.forgetme";
    },

    42()
		{
			document.location = "ni-action:postmessage?id=GDPR.Facebook.optin";
    },
    
    43()
		{
			document.location = "ni-action:postmessage?id=GDPR.Facebook.optout";
    },

    44()
		{
			document.location = "ni-action:postmessage?id=GDPR.Facebook.export";
    },
    
    45()
		{
			document.location = "ni-action:postmessage?id=GDPR.Facebook.forgetme";
    },

    46()
		{
			document.location = "ni-action:postmessage?id=GDPR.SAM.optin";
    },
    
    47()
		{
			document.location = "ni-action:postmessage?id=GDPR.SAM.optout";
    },
    
    48()
		{
			document.location = "ni-action:postmessage?id=GDPR.SAM.export";
    },
    
    49()
		{
			document.location = "ni-action:postmessage?id=GDPR.SAM.forgetme";
		},

},
	
  computed: {
    filteredList() {
	  return this.postList.filter(post=> {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
	},
	// containData(index) {
		
	// 	if(!this.filteredList.includes(this.postList[index])){
	// 		return true
	// 	}
	// 	else{
	// 		return false
	// 	}
	// },
  }

};
    
</script>

<style>
.hiddenRow {
    padding: 0 4px !important;
    background-color: #eeeeee;
    font-size: 13px;
}
</style>