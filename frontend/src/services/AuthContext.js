//file che richiamo in app per leggere stato utente e in base a quello fare routing
	const  baseAPIURL = "https://customers.lineacontinua.net/api";
	const userKey = "m.manaresi@ied.edu";






	export  function userIsLogged() {
		return localStorage.__nctoken__ && localStorage.__nctoken__.trim() !="";
	}



	function createRequest (itemOrItems) {
		let filters;
		if (typeof itemOrItems === "string") {
			filters = {};
			filters.nodeType = itemOrItems;
			itemOrItems = undefined
			

		}

		return {
			__nctoken__: localStorage.__nctoken__ || "",
			__ukey__: userKey,
			payload: {
				filters,
				item: Array.isArray(itemOrItems) ? undefined : itemOrItems,
				items: Array.isArray(itemOrItems) ? itemOrItems : undefined,
			},
		};
	};

	export async  function deletePrivate (itemOrItems) {
		const endPoint = "/node-user/delete";
		let request;
		if (Array.isArray(itemOrItems)) {
			request = createRequest(itemOrItems);
		}
		else {
			request = createRequest({ guid : itemOrItems.guid});
		}
		

		return sendRequest(endPoint, request);
	}

	export async  function getListPrivate (nodeType = "") {
		const endPoint = "/node-user/get-list";
		const request = createRequest(nodeType);

		return sendRequest(endPoint, request);
	}


	export async function insertPrivate (item) {
		const endPoint = "/node-user/insert";
		const request = createRequest(item);

		return sendRequest(endPoint, request);
	}


	export async function loginUser (user) {
		const endPoint = "/user/login";
		const request = createRequest(user);
        return sendRequest(endPoint, request)
        .then(response => {
            localStorage.__nctoken__ = response.__nctoken__;

            return response;
        })

        
	}


	export  function logOutUser() {
		delete localStorage.__nctoken__;

	}


	export async function registerUser (user) {
		const endPoint = "/user/register";
		const request = createRequest(user);

		
		return sendRequest(endPoint, request);
	}

	export async function sendRequest(endPoint, request) {
		return fetch(baseAPIURL + endPoint, {
			body: JSON.stringify(request),
			method: "POST",
		})
		.then(response => {
			return response.json();
		})
		.then(data => {
			
			// Qui potrebbe esserci validazione del contenuto
			return data;
		});
	}

	export async function update (item) {
		const endPoint = "/node-user/update";
		const request = createRequest(item);

		return sendRequest(endPoint, request);
	}

	export async function updateUser (user) {
		const endPoint = "/user/update";
		const request = createRequest(user);

		return sendRequest(endPoint, request);
	}


	export async function updatePrivate (item) {
		const endPoint = "/node-user/update";
		const request = createRequest(item);

		return sendRequest(endPoint, request);
	}


