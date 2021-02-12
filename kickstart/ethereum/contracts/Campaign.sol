pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCapaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCapaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests; // array of requests
    
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers; //key type => value type
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum, address creator) public {
        manager = creator; // who is creating the contract
        minimumContribution = minimum; // manager set min price
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution); // failsafe
        
        approvers[msg.sender] = true; // hashed
        approversCount ++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {

        Request memory newRequest = Request({ // memory, creating new value, not refering to anything in storage
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        // taking the array of requests and finding 
        // the one in question and saving that here.
        // and storage because we're going to make 
        // edits that persist later
        
        require(approvers[msg.sender]); // contributors only
        require(!request.approvals[msg.sender]);
        // this specific request -> has this person
        // already approved this request, we want false..
        
        // we then mark true once they vote so they would
        // fail above if they tried to vote again
        request.approvals[msg.sender] = true;
        request.approvalCount ++;
    }
    
    function finaliseRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    } 
}



