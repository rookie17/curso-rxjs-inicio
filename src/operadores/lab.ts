import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam urna, consectetur a leo feugiat, rhoncus faucibus nisl. Aliquam vel metus sapien. Vestibulum a metus sodales, tempor est eget, finibus ipsum. Suspendisse nec nunc vel nibh pretium tempor. Nullam sed risus vitae enim cursus imperdiet. Etiam commodo sit amet massa at tristique. Pellentesque eros tortor, volutpat et lacus at, fermentum pharetra nunc. Nunc placerat finibus nulla, nec ultricies elit consequat in. Aenean velit enim, vestibulum vel laoreet id, ultricies non massa. Sed finibus a arcu et scelerisque. Sed ex tortor, commodo quis tempus sit amet, vulputate eget erat. Praesent sodales libero id velit viverra sagittis.

Fusce condimentum sagittis blandit. Maecenas dictum consequat erat, at gravida augue maximus vitae. Fusce elementum lacus condimentum metus sodales varius. Proin laoreet neque a sapien sollicitudin venenatis. Etiam non sollicitudin tellus. Vivamus diam ligula, fermentum sit amet velit scelerisque, bibendum efficitur libero. Quisque est lorem, auctor non quam ac, tristique efficitur diam.

Phasellus sodales turpis eu felis venenatis, non commodo velit laoreet. Vestibulum sollicitudin velit nec ligula tempus, at sodales turpis placerat. Quisque id nibh nec neque gravida sagittis sed eget arcu. Nunc felis sapien, maximus sit amet dui a, ultricies dictum orci. Duis a suscipit orci. Phasellus vel orci bibendum, semper nisl id, imperdiet tellus. Ut augue lectus, rhoncus id vehicula ut, consequat ac felis. Maecenas sem orci, dapibus quis risus ut, mollis lobortis orci. Donec non libero quis dui consectetur cursus et sit amet justo. Pellentesque porttitor augue sed diam sollicitudin, id vehicula tellus volutpat.

Aenean consectetur, libero at lobortis vehicula, mauris lacus viverra orci, et imperdiet neque nulla vitae justo. Cras rutrum risus a blandit finibus. Donec tempus placerat luctus. Vivamus lacus enim, iaculis quis consectetur vel, condimentum ac velit. Duis imperdiet maximus ligula sit amet sagittis. Aliquam blandit risus a nulla tempus pulvinar. Etiam egestas augue at dolor mollis, vel hendrerit leo feugiat. Curabitur volutpat imperdiet commodo. Duis at orci suscipit, imperdiet magna ut, volutpat elit.

Sed sit amet tempus ipsum. Nulla eget semper libero. Donec eget arcu gravida, gravida elit ut, viverra nisl. Mauris eu semper odio. Morbi at varius eros. Sed lobortis sapien imperdiet, mollis risus at, dignissim sapien. In congue tellus ex, convallis mattis turpis tincidunt nec. Integer iaculis, felis eget fermentum eleifend, magna velit vulputate erat, in dictum enim tellus sit amet augue.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam urna, consectetur a leo feugiat, rhoncus faucibus nisl. Aliquam vel metus sapien. Vestibulum a metus sodales, tempor est eget, finibus ipsum. Suspendisse nec nunc vel nibh pretium tempor. Nullam sed risus vitae enim cursus imperdiet. Etiam commodo sit amet massa at tristique. Pellentesque eros tortor, volutpat et lacus at, fermentum pharetra nunc. Nunc placerat finibus nulla, nec ultricies elit consequat in. Aenean velit enim, vestibulum vel laoreet id, ultricies non massa. Sed finibus a arcu et scelerisque. Sed ex tortor, commodo quis tempus sit amet, vulputate eget erat. Praesent sodales libero id velit viverra sagittis.

Fusce condimentum sagittis blandit. Maecenas dictum consequat erat, at gravida augue maximus vitae. Fusce elementum lacus condimentum metus sodales varius. Proin laoreet neque a sapien sollicitudin venenatis. Etiam non sollicitudin tellus. Vivamus diam ligula, fermentum sit amet velit scelerisque, bibendum efficitur libero. Quisque est lorem, auctor non quam ac, tristique efficitur diam.

Phasellus sodales turpis eu felis venenatis, non commodo velit laoreet. Vestibulum sollicitudin velit nec ligula tempus, at sodales turpis placerat. Quisque id nibh nec neque gravida sagittis sed eget arcu. Nunc felis sapien, maximus sit amet dui a, ultricies dictum orci. Duis a suscipit orci. Phasellus vel orci bibendum, semper nisl id, imperdiet tellus. Ut augue lectus, rhoncus id vehicula ut, consequat ac felis. Maecenas sem orci, dapibus quis risus ut, mollis lobortis orci. Donec non libero quis dui consectetur cursus et sit amet justo. Pellentesque porttitor augue sed diam sollicitudin, id vehicula tellus volutpat.

Aenean consectetur, libero at lobortis vehicula, mauris lacus viverra orci, et imperdiet neque nulla vitae justo. Cras rutrum risus a blandit finibus. Donec tempus placerat luctus. Vivamus lacus enim, iaculis quis consectetur vel, condimentum ac velit. Duis imperdiet maximus ligula sit amet sagittis. Aliquam blandit risus a nulla tempus pulvinar. Etiam egestas augue at dolor mollis, vel hendrerit leo feugiat. Curabitur volutpat imperdiet commodo. Duis at orci suscipit, imperdiet magna ut, volutpat elit.

Sed sit amet tempus ipsum. Nulla eget semper libero. Donec eget arcu gravida, gravida elit ut, viverra nisl. Mauris eu semper odio. Morbi at varius eros. Sed lobortis sapien imperdiet, mollis risus at, dignissim sapien. In congue tellus ex, convallis mattis turpis tincidunt nec. Integer iaculis, felis eget fermentum eleifend, magna velit vulputate erat, in dictum enim tellus sit amet augue.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam urna, consectetur a leo feugiat, rhoncus faucibus nisl. Aliquam vel metus sapien. Vestibulum a metus sodales, tempor est eget, finibus ipsum. Suspendisse nec nunc vel nibh pretium tempor. Nullam sed risus vitae enim cursus imperdiet. Etiam commodo sit amet massa at tristique. Pellentesque eros tortor, volutpat et lacus at, fermentum pharetra nunc. Nunc placerat finibus nulla, nec ultricies elit consequat in. Aenean velit enim, vestibulum vel laoreet id, ultricies non massa. Sed finibus a arcu et scelerisque. Sed ex tortor, commodo quis tempus sit amet, vulputate eget erat. Praesent sodales libero id velit viverra sagittis.

Fusce condimentum sagittis blandit. Maecenas dictum consequat erat, at gravida augue maximus vitae. Fusce elementum lacus condimentum metus sodales varius. Proin laoreet neque a sapien sollicitudin venenatis. Etiam non sollicitudin tellus. Vivamus diam ligula, fermentum sit amet velit scelerisque, bibendum efficitur libero. Quisque est lorem, auctor non quam ac, tristique efficitur diam.

Phasellus sodales turpis eu felis venenatis, non commodo velit laoreet. Vestibulum sollicitudin velit nec ligula tempus, at sodales turpis placerat. Quisque id nibh nec neque gravida sagittis sed eget arcu. Nunc felis sapien, maximus sit amet dui a, ultricies dictum orci. Duis a suscipit orci. Phasellus vel orci bibendum, semper nisl id, imperdiet tellus. Ut augue lectus, rhoncus id vehicula ut, consequat ac felis. Maecenas sem orci, dapibus quis risus ut, mollis lobortis orci. Donec non libero quis dui consectetur cursus et sit amet justo. Pellentesque porttitor augue sed diam sollicitudin, id vehicula tellus volutpat.

Aenean consectetur, libero at lobortis vehicula, mauris lacus viverra orci, et imperdiet neque nulla vitae justo. Cras rutrum risus a blandit finibus. Donec tempus placerat luctus. Vivamus lacus enim, iaculis quis consectetur vel, condimentum ac velit. Duis imperdiet maximus ligula sit amet sagittis. Aliquam blandit risus a nulla tempus pulvinar. Etiam egestas augue at dolor mollis, vel hendrerit leo feugiat. Curabitur volutpat imperdiet commodo. Duis at orci suscipit, imperdiet magna ut, volutpat elit.

Sed sit amet tempus ipsum. Nulla eget semper libero. Donec eget arcu gravida, gravida elit ut, viverra nisl. Mauris eu semper odio. Morbi at varius eros. Sed lobortis sapien imperdiet, mollis risus at, dignissim sapien. In congue tellus ex, convallis mattis turpis tincidunt nec. Integer iaculis, felis eget fermentum eleifend, magna velit vulputate erat, in dictum enim tellus sit amet augue.`;


const div = document.createElement('div');
div.setAttribute('style','background-color: white; position: fixed;  width:100px;');
document.body.append(text);
document.body.append(div);


fromEvent(document, 'scroll')
.pipe(
)
.subscribe(console.log);

