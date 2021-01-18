export function loadEntries(filters=null) 
{
  return function(dispatch) 
  {
    dispatch({type: "LOAD_ENTRIES"});

    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(response => response.json())
      .then(data => {

        if (filters && filters.filter === 'sort')
        {
          data = data.sort(function(a, b) {
            return parseFloat(a[filters.by]) - parseFloat(b[filters.by]);
          });
        }

        if (filters && filters.filter === 'filter')
        {
          data = data.filter(function(i, n) {
            if (typeof i.language === 'string')
            {
              return i.language === filters.by;
            }
            if (i.language instanceof Array)
            {
              return i.language.indexOf(filters.by) != -1;
            }
          });
        }

        dispatch({type: "LOAD_ENTRIES_FULFILLED", payload: data});
      })
      .catch(error => console.dir(error));
  }
}
