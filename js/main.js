const PageState = function(){
    let currentState = new homeState(this);
    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state){
        currentState = state;
    }
};

// Home State
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, World!</h1>
    <p class="lead">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis ab est sequi sed, exercitationem hic officia harum deleniti porro.
    </p>
    <hr class="my-4">
    <p>
    consectetur adipisicing elit. Animi officiis ab est sequi sed, exercitationem hic officia harum deleniti porro.
    </p>
    <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
    </div>
    `;
};

// about state
const aboutState = function(page){
    document.querySelector('#heading').textContent = 'About US';
    document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
    `;
};

// contact state
const contactState = function(page){
    document.querySelector('#heading').textContent = 'Contact US';
    document.querySelector('#content').innerHTML = `
    <form>
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI vars
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact')

// Home
home.addEventListener('click', (e) => {
    page.change(new homeState);

    e.preventDefault();
});

// about
about.addEventListener('click', (e) => {
    page.change(new aboutState);

    e.preventDefault();
});

// contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);

    e.preventDefault();
});