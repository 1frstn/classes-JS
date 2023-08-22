class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false
      this._ratings = []
    }
    get title(){
      return this._title
    }
    get isCheckedOut(){
      return this._isCheckedOut
    }
    get ratings(){
      return this._ratings
    }
    set isCheckedOut(newIsCheckedOut){
      this._isCheckedOut = newIsCheckedOut
    }
    toggleCheckedOutStatus(){
      this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating(){
       const sum = this._ratings.reduce((acc,crv)=>acc + crv,0)
       return sum/this._ratings.length
    }
    
    addRating(newRating){
      if(newRating<=5 & newRating>=1){
        this._ratings.push(newRating)
      }else{
        console.log('rating must be between 0 and 6');
      }
       
    }
  
  }
  
  class Book extends Media{
    constructor(author,title,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author
    }
    get pages(){
      return this._pages
    }
  }
  
  class Movie extends Media{
    constructor(director,title,runTime,movieCast){
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast
    }
    get director(){
      return this._director
    }
    get runTime(){
      return this._runTime
    }
  }
  
  class CD extends Media{
    constructor(artist,title,songs,songTitle){
      super(title);
      this._artist = artist;
      this._songs = songs;
      this._songTitle = songTitle
    }
    get artist(){
      return this._artist
    }
    get songs(){
      return this._songs
    }
  }
  
  const historyOfEverything = new Book('Kerem','A short history of me',544)
  historyOfEverything.toggleCheckedOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  //historyOfEverything.getAverageRating()
  console.log(historyOfEverything.getAverageRating())
  
  const speed = new Movie('Jan de Bont','Speed',123) 
  speed.toggleCheckedOutStatus()
  console.log(speed.isCheckedOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(6)
  console.log(speed.getAverageRating())
  
  