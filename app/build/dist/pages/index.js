'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

var _Theme = require('../components/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/phuongnq/github/website-scraper-demo-nextjs/app/pages/index.js?entry';

// Straight away require/import scss/css just like in react.


var Index = function Index() {
    return (
        // Wrap your page inside <Theme> HOC to get bootstrap styling.
        // Theme can also be omitted if react-bootstrap components are not used.
        _react2.default.createElement(_Theme2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }), _react2.default.createElement('span', {
            className: 'jsx-3708676014' + ' ' + 'heading',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 20
            }
        }, 'React.js | Next.js | Express.js | Bootstrap - SCSS'), _react2.default.createElement('span', {
            className: 'jsx-3708676014' + ' ' + 'text',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 21
            }
        }, 'with SSR.'), _react2.default.createElement('div', {
            className: 'jsx-3708676014' + ' ' + 'img-container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 24
            }
        }, _react2.default.createElement('img', { alt: '', src: '/icons/github.png', className: 'jsx-3708676014',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 25
            }
        })), _react2.default.createElement('span', {
            className: 'jsx-3708676014' + ' ' + 'text',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 28
            }
        }, _react2.default.createElement('a', { href: 'https://github.com/MustansirZia/next-express-bootstrap-boilerplate', className: 'jsx-3708676014',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 29
            }
        }, 'Github')), _react2.default.createElement('br', {
            className: 'jsx-3708676014',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 33
            }
        }), _react2.default.createElement('div', {
            className: 'jsx-3708676014' + ' ' + 'btn',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 34
            }
        }, _react2.default.createElement(_link2.default, { href: '/profile', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
            }
        }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
            }
        }, 'Click Me'))), _react2.default.createElement(_style2.default, {
            styleId: '3708676014',
            css: '.btn.jsx-3708676014{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBRzhCLDBFQUNVLG1HQUN6QiIsImZpbGUiOiJhcHAvcGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGh1b25nbnEvZ2l0aHViL3dlYnNpdGUtc2NyYXBlci1kZW1vLW5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL2NvbXBvbmVudHMvVGhlbWUnO1xuXG4vLyBTdHJhaWdodCBhd2F5IHJlcXVpcmUvaW1wb3J0IHNjc3MvY3NzIGp1c3QgbGlrZSBpbiByZWFjdC5cbmltcG9ydCBpbmRleFN0eWxlIGZyb20gJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gICAgLy8gV3JhcCB5b3VyIHBhZ2UgaW5zaWRlIDxUaGVtZT4gSE9DIHRvIGdldCBib290c3RyYXAgc3R5bGluZy5cbiAgICAvLyBUaGVtZSBjYW4gYWxzbyBiZSBvbWl0dGVkIGlmIHJlYWN0LWJvb3RzdHJhcCBjb21wb25lbnRzIGFyZSBub3QgdXNlZC5cbiAgICA8VGhlbWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBTZXQgaW5kZXhTdHlsaW5nIHZpYSBkYW5nZXJvdXNseVNldElubmVySFRNTC5cbiAgICAgICAgICAgIFRoaXMgc3RlcCB3aWxsIG1ha2UgdGhlIGJlbG93IGNsYXNzZXMgdG8gd29yay5cbiAgICAgICAgICAgICovXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaW5kZXhTdHlsZSB9fSAvPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5SZWFjdC5qcyB8IE5leHQuanMgfCBFeHByZXNzLmpzIHwgQm9vdHN0cmFwIC0gU0NTUzwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPndpdGggU1NSLjwvc3Bhbj5cblxuICAgICAgICB7LyogQWNxdWlyZSBzdGF0aWMgYXNzZXRzIGZyb20gZXhwcmVzcyBzdGF0aWMgZGlyZWN0bHkuICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2ljb25zL2dpdGh1Yi5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL011c3RhbnNpclppYS9uZXh0LWV4cHJlc3MtYm9vdHN0cmFwLWJvaWxlcnBsYXRlXCI+XG4gICAgICAgICAgICAgIEdpdGh1YlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiPkNsaWNrIE1lPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTdHlsaW5nIHVzaW5nIHN0eWxlZC1qc3guICovfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1gXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L1RoZW1lPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=app/pages/index.js?entry */'
        }))
    );
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiQnV0dG9uIiwiVGhlbWUiLCJpbmRleFN0eWxlIiwiSW5kZXgiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7O0FBR2xCLEFBQU8sQUFBZ0I7Ozs7Ozs7O0FBRHZCOzs7QUFHQSxJQUFNLFFBQVEsU0FBUixBQUFRLFFBQUE7QUFDVjtBQUNBO0FBQ0E7d0JBQUEsQUFBQzs7MEJBQUQ7NEJBQUEsQUFPSTtBQVBKO0FBQUEsb0RBT1cseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTswQkFBMUM7NEJBUEosQUFPSSxBQUVBO0FBRkE7NEJBRUEsY0FBQTtnREFBQSxBQUFnQjs7MEJBQWhCOzRCQUFBO0FBQUE7QUFBQSxXQVRKLEFBU0ksQUFDQSx1RUFBQSxjQUFBO2dEQUFBLEFBQWdCOzswQkFBaEI7NEJBQUE7QUFBQTtBQUFBLFdBVkosQUFVSSxBQUdBLDhCQUFBLGNBQUE7Z0RBQUEsQUFBZTs7MEJBQWY7NEJBQUEsQUFDSTtBQURKO0FBQUEsa0RBQ1MsS0FBTCxBQUFTLElBQUcsS0FBWixBQUFnQixnQ0FBaEI7OzBCQUFBOzRCQWRSLEFBYUksQUFDSSxBQUdKO0FBSEk7NkJBR0osY0FBQTtnREFBQSxBQUFnQjs7MEJBQWhCOzRCQUFBLEFBQ0k7QUFESjtBQUFBLDJCQUNJLGNBQUEsT0FBRyxNQUFILEFBQVEsaUZBQVI7OzBCQUFBOzRCQUFBO0FBQUE7V0FsQlIsQUFpQkksQUFDSSxBQUlKO3VCQUFBOzswQkFBQTs0QkF0QkosQUFzQkksQUFDQTtBQURBO0FBQUEsNEJBQ0EsY0FBQTtnREFBQSxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7QUFBQSwyQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVzswQkFBWDs0QkFBQSxBQUNJO0FBREo7MkJBQ0ksQUFBQyx3Q0FBTyxTQUFSLEFBQWdCOzBCQUFoQjs0QkFBQTtBQUFBO1dBekJaLEFBdUJJLEFBQ0ksQUFDSTtxQkF6Qlo7aUJBSFUsQUFHVjtBQUFBOztBQUhKLEFBMkNBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3BodW9uZ25xL2dpdGh1Yi93ZWJzaXRlLXNjcmFwZXItZGVtby1uZXh0anMifQ==