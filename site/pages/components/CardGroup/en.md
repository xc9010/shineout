# CardGroup

<example />

## API

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| className | string | none | extend className |
| style | object | none | wrapper style |
| height | number | none | group height |
| cardWidth | number | none | card min height |
| columns | number | 3 | items count each row, not work while cardWidth setted |
| gridStyle | object | none | grid style |
| gap | number | 16 | gap width horizontal and vertical, if diff shoud set gridStyle |

### CardGroup.Item

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| className | string | none | extend className |
| style | object | none | card style | 
| placeholder | React.Element | none | lazy load placeholder, enable lazy load while set |
| checked | bool \| undefined | - | checked status, hide while not set |
| disabled | bool | false | disable checkbox |
| value | any | true | Specifies the result |
| onChange | function(checked,value) | - | check changed, value is the value props |

