'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

        _this.state = {
            url: ''
        };

        _this.doSubmitUrl = _this.doSubmitUrl.bind(_this);
        _this.handleChangeUrl = _this.handleChangeUrl.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: 'handleChangeUrl',
        value: function handleChangeUrl(e) {
            this.setState({ url: e.target.value });
        }
    }, {
        key: 'doSubmitUrl',
        value: function doSubmitUrl() {
            var _this2 = this;

            var data = { url: this.state.url };
            var url = '/scrape_url';
            fetch(url, {
                method: 'POST',
                body: (0, _stringify2.default)(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(function (response) {
                return response.blob();
            }).then(function (blob) {
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.text = _this2.state.url + '.zip';
                var downloadLink = document.getElementById('downloadLink');
                downloadLink.appendChild(link);
            }).catch(function (error) {
                return console.error('Error:', error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Theme2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('span', {
                className: 'jsx-2722642510' + ' ' + 'heading',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Web Scraber Demo Application'), _react2.default.createElement('span', {
                className: 'jsx-2722642510' + ' ' + 'text',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'with NextJS.'), _react2.default.createElement('div', {
                className: 'jsx-2722642510' + ' ' + 'img-container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('img', { alt: '', src: '/icons/github.png', className: 'jsx-2722642510',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            })), _react2.default.createElement('span', {
                className: 'jsx-2722642510' + ' ' + 'text',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('a', { href: 'https://github.com/phuongnq/website-scraper-demo-nextjs', className: 'jsx-2722642510',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Github')), _react2.default.createElement('br', {
                className: 'jsx-2722642510',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement('form', { action: '#', className: 'jsx-2722642510',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2722642510' + ' ' + 'field',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('input', { placeholder: 'Sample: https://google.com/', value: this.state.url, onChange: this.handleChangeUrl, className: 'jsx-2722642510',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }), _react2.default.createElement('label', {
                className: 'jsx-2722642510',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Input URL')), _react2.default.createElement('div', {
                className: 'jsx-2722642510' + ' ' + 'field form-actions',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('button', { type: 'submit', onClick: this.doSubmitUrl, className: 'jsx-2722642510',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Submit'))), _react2.default.createElement('div', { id: 'downloadLink', className: 'jsx-2722642510',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: '2722642510',
                css: '.btn.jsx-2722642510{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRTRCLEFBR3NDLDBFQUNVLG1HQUMzQiIsImZpbGUiOiJhcHAvcGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGh1b25nbnEvZ2l0aHViL3dlYnNpdGUtc2NyYXBlci1kZW1vLW5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL2NvbXBvbmVudHMvVGhlbWUnO1xuXG5pbXBvcnQgaW5kZXhTdHlsZSBmcm9tICcuLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRvU3VibWl0VXJsID0gdGhpcy5kb1N1Ym1pdFVybC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVVybCA9IHRoaXMuaGFuZGxlQ2hhbmdlVXJsLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZVVybChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cmw6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgICBkb1N1Ym1pdFVybCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXJsOiB0aGlzLnN0YXRlLnVybCB9XG4gICAgICAgIGNvbnN0IHVybCA9ICcvc2NyYXBlX3VybCc7XG4gICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAgIC50aGVuKChibG9iKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxpbmsuaHJlZj13aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgIGxpbmsudGV4dD1gJHt0aGlzLnN0YXRlLnVybH0uemlwYDtcbiAgICAgICAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZExpbmsnKTtcbiAgICAgICAgICAgIGRvd25sb2FkTGluay5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUaGVtZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpbmRleFN0eWxlIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+V2ViIFNjcmFiZXIgRGVtbyBBcHBsaWNhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+d2l0aCBOZXh0SlMuPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2ljb25zL2dpdGh1Yi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BodW9uZ25xL3dlYnNpdGUtc2NyYXBlci1kZW1vLW5leHRqc1wiPlxuICAgICAgICAgICAgICAgICAgICBHaXRodWJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249JyMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0nU2FtcGxlOiBodHRwczovL2dvb2dsZS5jb20vJyB2YWx1ZT17dGhpcy5zdGF0ZS51cmx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVVybH0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPklucHV0IFVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkIGZvcm0tYWN0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXt0aGlzLmRvU3VibWl0VXJsfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImRvd25sb2FkTGlua1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L1RoZW1lPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=app/pages/index.js?entry */'
            }));
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiQnV0dG9uIiwiVGhlbWUiLCJpbmRleFN0eWxlIiwiSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwidXJsIiwiZG9TdWJtaXRVcmwiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlVXJsIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ0ZXh0IiwiZG93bmxvYWRMaW5rIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiX19odG1sIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7O0FBRWxCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCO21DQUNGOzttQkFBQSxBQUFZLE9BQU87NENBQUE7O3dJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO2lCQUFMLEFBQWEsQUFDSixBQUdUO0FBSmEsQUFDVDs7Y0FHSixBQUFLLGNBQWMsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FBcEMsQUFDQTtjQUFBLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQVA3QixBQU9mO2VBQ0g7Ozs7O3dDLEFBQ2UsR0FBRyxBQUNmO2lCQUFBLEFBQUssU0FBUyxFQUFFLEtBQUssRUFBQSxBQUFFLE9BQXZCLEFBQWMsQUFBZ0IsQUFDakM7Ozs7c0NBQ2E7eUJBQ1Y7O2dCQUFNLE9BQU8sRUFBRSxLQUFLLEtBQUEsQUFBSyxNQUF6QixBQUFhLEFBQWtCLEFBQy9CO2dCQUFNLE1BQU4sQUFBWSxBQUNaO2tCQUFBLEFBQU07d0JBQUssQUFDQyxBQUNSO3NCQUFNLHlCQUZDLEFBRUQsQUFBZSxBQUNyQjs2QkFBUyxBQUFJO29DQUhqQixBQUFXLEFBR0UsQUFBWSxBQUNEO0FBREMsQUFDakIsaUJBREs7QUFIRixBQUNQLGVBREosQUFPQyxLQUFLLFVBQUEsQUFBQyxVQUFEO3VCQUFjLFNBQWQsQUFBYyxBQUFTO0FBUDdCLGVBQUEsQUFRQyxLQUFLLFVBQUEsQUFBQyxNQUFTLEFBQ1o7b0JBQU0sT0FBSyxTQUFBLEFBQVMsY0FBcEIsQUFBVyxBQUF1QixBQUNsQztxQkFBQSxBQUFLLE9BQUssT0FBQSxBQUFPLElBQVAsQUFBVyxnQkFBckIsQUFBVSxBQUEyQixBQUNyQztxQkFBQSxBQUFLLE9BQVEsT0FBQSxBQUFLLE1BQWxCLEFBQXdCLE1BQ3hCO29CQUFNLGVBQWUsU0FBQSxBQUFTLGVBQTlCLEFBQXFCLEFBQXdCLEFBQzdDOzZCQUFBLEFBQWEsWUFBYixBQUF5QixBQUM1QjtBQWRELGVBQUEsQUFlQyxNQUFNLGlCQUFBO3VCQUFTLFFBQUEsQUFBUSxNQUFSLEFBQWMsVUFBdkIsQUFBUyxBQUF3QjtBQWZ4QyxBQWdCSDs7OztpQ0FDUSxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsMkNBQ1cseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTs4QkFBMUM7Z0NBREosQUFDSSxBQUVBO0FBRkE7Z0NBRUEsY0FBQTtvREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSxpREFBQSxjQUFBO29EQUFBLEFBQWdCOzs4QkFBaEI7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUVBLGlDQUFBLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsc0RBQ1MsS0FBTCxBQUFTLElBQUcsS0FBWixBQUFnQixnQ0FBaEI7OzhCQUFBO2dDQVBSLEFBTUksQUFDSSxBQUdKO0FBSEk7aUNBR0osY0FBQTtvREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsT0FBRyxNQUFILEFBQVEsc0VBQVI7OzhCQUFBO2dDQUFBO0FBQUE7ZUFYUixBQVVJLEFBQ0ksQUFJSjsyQkFBQTs7OEJBQUE7Z0NBZkosQUFlSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBLFVBQU0sUUFBTixBQUFhLGdCQUFiOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSx3REFDVyxhQUFQLEFBQW1CLCtCQUE4QixPQUFPLEtBQUEsQUFBSyxNQUE3RCxBQUFtRSxLQUFLLFVBQVUsS0FBbEYsQUFBdUYsNEJBQXZGOzs4QkFBQTtnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUNBLEFBRUksQUFFSiwrQkFBQSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsWUFBUSxNQUFSLEFBQWEsVUFBUyxTQUFTLEtBQS9CLEFBQW9DLHdCQUFwQzs7OEJBQUE7Z0NBQUE7QUFBQTtlQXRCUixBQWdCSSxBQUtBLEFBQ0ksQUFHSixvREFBSyxJQUFMLEFBQVEsMkJBQVI7OzhCQUFBO2dDQXpCSixBQXlCSTtBQUFBOzt5QkF6Qko7cUJBREosQUFDSSxBQW9DUDtBQXBDTzs7Ozs7RUFuQ1EsZ0JBQU0sQSxBQTBFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGh1b25nbnEvZ2l0aHViL3dlYnNpdGUtc2NyYXBlci1kZW1vLW5leHRqcyJ9