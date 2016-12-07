$(() => {
  const container = $('.container');
  const JSONstring = window.location.href.split('?data=')[1];
  let decoded = decodeURIComponent(JSONstring);
  const lastCommaIndex = decoded.lastIndexOf(',');
  decoded = decoded.substring(0, lastCommaIndex) + decoded.substring(lastCommaIndex + 1);
  let data = {};
  try {
    data = JSON.parse(decoded);
    console.log(data);
  } catch(err) {
    alert('Failed to parse url!');
    $('.status').text('Failed to load data!');
    return;
  }
  $('.status').hide();
  // Display info
  for (let propName in data) {
     // Finds proper element by property name and sets its proper text
    const item = $('<div>', {
      class: 'property',
      'data-property-name': propName
    });
    const b = $('<b>', { class: 'property-name', text: propName.charAt(0).toUpperCase() + propName.slice(1) + ': ' });
    const span = $('<span>', { class: 'property-value', text: data[propName] });
    item.append(b);
    item.append(span);
    container.append(item);
  }
  
  $('title').text(`${data.first} | Qontactr`);
});
