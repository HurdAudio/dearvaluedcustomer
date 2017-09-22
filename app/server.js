'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

require('dotenv').config();

const app = express();
// const users = require('./routes/users.js');
// const holidays = require('./routes/holidays.js');
// const holidaysbyuser = require('./routes/holidaysbyuser.js');
// const occasions = require('./routes/occasions.js');
// const occasionsbyuser = require('./routes/occasionsbyuser.js');
// const bills = require('./routes/bills.js');
// const billsbyuser = require('./routes/billsbyuser.js');
// const tasks = require('./routes/tasks.js');
// const tasksbyuser = require('./routes/tasksbyuser.js');
// const observances = require('./routes/observances.js');
// const observancesbyuser = require('./routes/observancesbyuser.js');
// const blocktypes = require('./routes/blocktypes.js');
// const blocktypesbyuser = require('./routes/blocktypesbyuser.js');
// const timeblocks = require('./routes/timeblocks.js');
// const timeblocksbyuser = require('./routes/timeblocksbyuser.js');
// const goals = require('./routes/goals.js');
// const goalsbyuser = require('./routes/goalsbyuser.js');
// const friday_musics = require('./routes/friday_musics.js');
// const friday_musicsbyuser = require('./routes/friday_musicsbyuser.js');
// const sunday_musics = require('./routes/sunday_musics.js');
// const sunday_musicsbyuser = require('./routes/sunday_musicsbyuser.js');
// const january_arts = require('./routes/january_arts.js');
// const january_artsbyuser = require('./routes/january_artsbyuser.js');
// const january_musics = require('./routes/january_musics.js');
// const january_musicsbyuser = require('./routes/january_musicsbyuser.js');
// const february_arts = require('./routes/february_arts.js');
// const february_artsbyuser = require('./routes/february_artsbyuser.js');
// const february_musics = require('./routes/february_musics.js');
// const february_musicsbyuser = require('./routes/february_musicsbyuser.js');
// const march_arts = require('./routes/march_arts.js');
// const march_artsbyuser = require('./routes/march_artsbyuser.js');
// const march_musics = require('./routes/march_musics.js');
// const march_musicsbyuser = require('./routes/march_musicsbyuser.js');
// const april_arts = require('./routes/april_arts.js');
// const april_artsbyuser = require('./routes/april_artsbyuser.js');
// const april_musics = require('./routes/april_musics.js');
// const april_musicsbyuser = require('./routes/april_musicsbyuser.js');
// const may_arts = require('./routes/may_arts.js');
// const may_artsbyuser = require('./routes/may_artsbyuser.js');
// const may_musics = require('./routes/may_musics.js');
// const may_musicsbyuser = require('./routes/may_musicsbyuser.js');

const port = process.env.PORT || 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));
// app.use('/scripts', express.static(path.join(__dirname, '../node_modules/vexflow/releases/')));
// app.use('/moment', express.static(path.join(__dirname, '../node_modules/moment/min/')));



 // app.use('/users', users);
 // app.use('/holidays', holidays);
 // app.use('/holidaysbyuser', holidaysbyuser);
 // app.use('/occasions', occasions);
 // app.use('/occasionsbyuser', occasionsbyuser);
 // app.use('/bills', bills);
 // app.use('/billsbyuser', billsbyuser);
 // app.use('/tasks', tasks);
 // app.use('/tasksbyuser', tasksbyuser);
 // app.use('/observances', observances);
 // app.use('/observancesbyuser', observancesbyuser);
 // app.use('/blocktypes', blocktypes);
 // app.use('/blocktypesbyuser', blocktypesbyuser);
 // app.use('/timeblocks', timeblocks);
 // app.use('/timeblocksbyuser', timeblocksbyuser);
 // app.use('/goals', goals);
 // app.use('/goalsbyuser', goalsbyuser);
 // app.use('/friday_musics', friday_musics);
 // app.use('/friday_musicsbyuser', friday_musicsbyuser);
 // app.use('/sunday_musics', sunday_musics);
 // app.use('/sunday_musicsbyuser', sunday_musicsbyuser);
 // app.use('/january_arts', january_arts);
 // app.use('/january_artsbyuser', january_artsbyuser);
 // app.use('/january_musics', january_musics);
 // app.use('/january_musicsbyuser', january_musicsbyuser);
 // app.use('/february_arts', february_arts);
 // app.use('/february_artsbyuser', february_artsbyuser);
 // app.use('/february_musics', february_musics);
 // app.use('/february_musicsbyuser', february_musicsbyuser);
 // app.use('/march_arts', march_arts);
 // app.use('/march_artsbyuser', march_artsbyuser);
 // app.use('/march_musics', march_musics);
 // app.use('/march_musicsbyuser', march_musicsbyuser);
 // app.use('/april_arts', april_arts);
 // app.use('/april_artsbyuser', april_artsbyuser);
 // app.use('/april_musics', april_musics);
 // app.use('/april_musicsbyuser', april_musicsbyuser);
 // app.use('/may_arts', may_arts);
 // app.use('/may_artsbyuser', may_artsbyuser);
 // app.use('/may_musics', may_musics);
 // app.use('/may_musicsbyuser', may_musicsbyuser);
// app.use('/user_blogs', user_blogs);
// app.use('/blog_comments', blog_comments);
// app.use('/books', books);
// app.use('/periodicals', periodicals);
// app.use('/user_book_reviews', user_book_reviews);
// app.use('/user_book_review_comments', user_book_review_comments);
// app.use('/blogs', blogs);
// app.use('/user_blog_reading_lists', user_blog_reading_lists);
// app.use('/user_periodical_reading_lists', user_periodical_reading_lists);
// app.use('/user_technical_reading_lists', user_technical_reading_lists);
// app.use('/user_reading_lists', user_reading_lists);
// app.use('/prize_lists', prize_lists);
// app.use('/interrupts', interrupts);
// app.use('/female_author_selections', female_author_selections);
// app.use('/crime_series', crime_series);
// app.use('/backlog_ebooks', backlog_ebooks);
// app.use('/science_fiction_series', science_fiction_series);
// app.use('/free_selections', free_selections);
// app.use('/inserts', inserts);
// app.use('/literary_journals', literary_journals);
// app.use('/bizarro_fictions', bizarro_fictions);
// app.use('/genre_journals', genre_journals);
// app.use('/classics', classics);
// app.use('/compendiums', compendiums);
// app.use('/male_author_selections', male_author_selections);
// app.use('/backlog_physical_books', backlog_physical_books);
// app.use('/non_fictions', non_fictions);
// app.use('/anthologies', anthologies);
// app.use('/roulettes', roulettes);
// app.use('/graphic_novels', graphic_novels);
// app.use('/occult_readings', occult_readings);
// app.use('/contemporary_pulps', contemporary_pulps);
// app.use('/vintage_pulps', vintage_pulps);
// app.use('/agatha_awards', agatha_awards);
// app.use('/anthony_awards', anthony_awards);
// app.use('/arthur_c_clark_awards', arthur_c_clark_awards);
// app.use('/barry_awards', barry_awards);
// app.use('/bram_stoker_awards', bram_stoker_awards);
// app.use('/british_science_fiction_association_awards', british_science_fiction_association_awards);
// app.use('/chicago_tribune_heartland_prizes', chicago_tribune_heartland_prizes);
// app.use('/compton_crook_awards', compton_crook_awards);
// app.use('/costa_book_awards', costa_book_awards);
// app.use('/crime_writers_association_new_blood_daggers', crime_writers_association_new_blood_daggers);
// app.use('/desmond_elliott_prizes', desmond_elliott_prizes);
// app.use('/edgar_awards', edgar_awards);
// app.use('/encore_awards', encore_awards);
// app.use('/flannery_oconnor_award_for_short_fictions', flannery_oconnor_award_for_short_fictions);
// app.use('/goodreads_choice_awards', goodreads_choice_awards);
// app.use('/governor_general_literary_awards', governor_general_literary_awards);
// app.use('/hammett_awards', hammett_awards);
// app.use('/hugo_awards', hugo_awards);
// app.use('/international_impac_dublin_awards', international_impac_dublin_awards);
// app.use('/itw_thriller_awards', itw_thriller_awards);
// app.use('/james_tait_black_memorial_prizes', james_tait_black_memorial_prizes);
// app.use('/james_tiptree_jr_literary_awards', james_tiptree_jr_literary_awards);
// app.use('/kiriyama_prizes', kiriyama_prizes);
// app.use('/kirkus_prizes', kirkus_prizes);
// app.use('/kitschies', kitschies);
// app.use('/los_angeles_times_book_prizes', los_angeles_times_book_prizes);
// app.use('/locus_awards', locus_awards);
// app.use('/macavity_awards', macavity_awards);
// app.use('/man_booker_prizes', man_booker_prizes);
// app.use('/mary_mccarthy_prizes', mary_mccarthy_prizes);
// app.use('/mckittrick_prizes', mckittrick_prizes);
// app.use('/minnesota_book_awards', minnesota_book_awards);
// app.use('/mythopoeic_awards', mythopoeic_awards);
// app.use('/national_book_awards', national_book_awards);
// app.use('/national_book_critics_circle_awards', national_book_critics_circle_awards);
// app.use('/nebula_awards', nebula_awards);
// app.use('/orange_prizes', orange_prizes);
// app.use('/pen_bellwether_prize_for_socially_engaged_fictions', pen_bellwether_prize_for_socially_engaged_fictions);
// app.use('/pen_faulkner_awards', pen_faulkner_awards);
// app.use('/pen_hemingway_awards', pen_hemingway_awards);
// app.use('/pen_open_book_awards', pen_open_book_awards);
// app.use('/pen_translation_prizes', pen_translation_prizes);
// app.use('/philip_k_dick_awards', philip_k_dick_awards);
// app.use('/pulitzer_prize_for_fictions', pulitzer_prize_for_fictions);
// app.use('/pulp_ark_new_pulp_awards', pulp_ark_new_pulp_awards);
// app.use('/rogers_writers_trust_fiction_prizes', rogers_writers_trust_fiction_prizes);
// app.use('/scotiabank_giller_prizes', scotiabank_giller_prizes);
// app.use('/shamus_awards', shamus_awards);
// app.use('/shirley_jackson_awards', shirley_jackson_awards);
// app.use('/sidewise_awards', sidewise_awards);
// app.use('/spur_awards', spur_awards);
// app.use('/sunburst_awards', sunburst_awards);
// app.use('/this_is_horror_awards', this_is_horror_awards);
// app.use('/thurber_prizes', thurber_prizes);
// app.use('/walter_scott_prizes', walter_scott_prizes);
// app.use('/world_fantasy_awards', world_fantasy_awards);
// app.use('/wonderland_book_awards', wonderland_book_awards);
// app.use('/login', login);
// app.use('/players', players);
// app.use('/fantasyteams', fantasyteams);
// app.use('/headtoheadmatchups', headtoheadmatchups);
// app.use('/rotisseriematchups', rotisseriematchups);
// app.get('/onthisdayinhistory/:date', (req, res, next) =>{
//   let newUrl = 'http://history.muffinlabs.com/date/';
//   let date = new Date(req.params.date);
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   let queryString = newUrl + month + '/' + day;
//   return request(queryString).pipe(res);
// });

// app.get('/words/:word', (req, res, next)=>{
//   //returns synonyms
//   let newURL = 'https://api.datamuse.com/words?ml=' + req.params.word;
//   return request(newURL).pipe(res);
// });

// app.get('/wordassociation/:word', (req, res, next)=>{
//   //returns strongly associated words
//   let newURL = 'https://api.datamuse.com/words?rel_trg=' + req.params.word;
//   return request(newURL).pipe(res);
// });
//
// app.get('/dictionary/:word', (req, res, next)=>{
//   let queryString1 = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/';
//   let queryString2 = '?key=';
//   request(queryString1 + req.params.word + queryString2 + process.env.DICTIONARY_KEY).pipe(res);
//
//
// });

// app.post('/xmlconverter/', (req, res, next)=>{
//   //console.log(req.body.data);
//    parseString(req.body.data, (err, result)=>{
//      res.send(result);
//    });
// });


app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.listen(port, () => {
  console.log('Listening on port', port);
  console.log('postgreSQL is lit.');
});

module.exports = app;
