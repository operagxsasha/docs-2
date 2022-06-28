(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{474:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"verifying-smart-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifying-smart-contracts"}},[t._v("#")]),t._v(" Verifying Smart Contracts")]),t._v(" "),a("p",[t._v("The following are the steps needed to verify any contract from the chain. In this particular example a brand new contract uploaded to the testnet.")]),t._v(" "),a("h3",{attrs:{id:"create-new-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-new-contract"}},[t._v("#")]),t._v(" Create new contract")]),t._v(" "),a("p",[t._v("Follow "),a("a",{attrs:{href:"https://docs.osmosis.zone/developing/dapps/get_started/cosmwasm-testnet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),a("OutboundLink")],1),t._v(" to create a new contract with Beaker.")]),t._v(" "),a("p",[t._v("Output:\n"),a("img",{attrs:{width:"686",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176251934-121d6422-808b-4d42-b482-98ac792af633.png"}})]),t._v(" "),a("p",[t._v("Once the contract is created query the contract information. Assuming you are connected to the testnet.")]),t._v(" "),a("h3",{attrs:{id:"contract-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract-info"}},[t._v("#")]),t._v(" Contract info")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("osmosisd query wasm contract osmo1mpf0guu0t363xrshhedandypq003ahzaxvsxzgu69n3ej03mh2zqx5gk8l\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Output:\n"),a("img",{attrs:{width:"1190",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176260093-1fc8ac27-dbd6-4f3b-86c8-341112496db4.png"}})]),t._v(" "),a("h3",{attrs:{id:"contract-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract-version"}},[t._v("#")]),t._v(" Contract version")]),t._v(" "),a("p",[t._v("Get the contract version by running the following command")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("osmosisd query wasm contract-state raw osmo1mpf0guu0t363xrshhedandypq003ahzaxvsxzgu69n3ej03mh2zqx5gk8l 636F6E74726163745F696E666F --node https://rpc-test.osmosis.zone:443 --output json | jq  -r .data | base64 -d | jq\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("What in the world is "),a("code",[t._v("636F6E74726163745F696E666F")]),t._v("? 😕")]),t._v(" "),a("p",[t._v('ContractInfo is must be stored under "contract_info" key which translates to "636F6E74726163745F696E666F" in hex format. As documented '),a("a",{attrs:{href:"https://lib.rs/crates/cw2",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Output:\n"),a("img",{attrs:{width:"1210",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176259801-3b961c4c-c757-4a80-a9b1-c893c6306789.png"}})]),t._v(" "),a("h3",{attrs:{id:"downloading-the-contract-from-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-the-contract-from-the-network"}},[t._v("#")]),t._v(" Downloading the Contract from the network")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("osmosisd query wasm code 205 205_code.wasm --node https://rpc-test.osmosis.zone:443\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Output:\n"),a("img",{attrs:{width:"713",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176260453-0a1ed7c4-e850-4c0d-8e88-3a7de5a7aef9.png"}})]),t._v(" "),a("h3",{attrs:{id:"getting-the-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-hash"}},[t._v("#")]),t._v(" Getting the hash")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sha256sum 205_code.wasm\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Output :\n"),a("img",{attrs:{width:"805",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176260874-546f1efe-84ee-470c-b050-bff49c2e7d16.png"}})]),t._v(" "),a("p",[a("code",[t._v("0b662785042cd938d0f0e8142f69d2d23fdf0addec965d1fbeacf44080330016")])]),t._v(" "),a("h3",{attrs:{id:"verify-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-hash"}},[t._v("#")]),t._v(" Verify hash")]),t._v(" "),a("p",[t._v("Now it's time to verify the hash with the source repos. All contracts should provide a repository with a hash for their contracts the same way that "),a("a",{attrs:{href:"https://github.com/CosmWasm/cw-plus/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("cw-plus"),a("OutboundLink")],1),t._v(" does on their checksum as shown below:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("10bc1a8cf82055106b26136f26137d6bf132df99c2d2098a75d03b64e7fe75a5  cw1155_base.wasm\n539b62678532596c73b27764186623a2bb868f5e67c3e588508c4a28e105e8c9  cw1_subkeys.wasm\nb67bc69fef770c28d48730feb800ea9c91eaae1a608e3ea7819aac64a6e99d92  cw1_whitelist.wasm\n....\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);