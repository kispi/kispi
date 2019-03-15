const QueryBuilder = {
    install(Vue, options) {
        Vue.prototype.$qb = function() {
            return {
                queryParams: {},

                where: function(field, value) {
                    this.appendCondition(field + ':' + value, '|');
                    return this;
                },

                whereNot: function(field, value) {
                    this.appendCondition('Ex.' + field + ':' + value, ',');
                    return this;
                },

                whereContains: function(field, value) {
                    this.appendCondition(field + '__icontains:' + value, '|');
                    return this;
                },

                whereOrContains: function(field, value) {
                    this.appendCondition('Or.' + field + '__icontains:' + value, ',');
                    return this;
                },

                whereOr: function(field, value) {
                    this.appendCondition('Or.' + field + ':' + value, ',');
                    return this;
                },

                whereIn: function(field, values) {
                    this.appendCondition(field + '.in:' + values.join('.'), '|');
                    return this;
                },

                whereNotIn: function(field, values) {
                    if (values.length > 0) {
                        this.appendCondition('Ex.' + field + '.in:' + values.join('.'), '|');
                    }
                    return this;
                },

                whereEmpty: function(field) {
                    this.appendCondition(field + '.empty:true', '|');
                    return this;
                },

                whereNotEmpty: function(field) {
                    this.appendCondition(field + '.notempty:true', '|');
                    return this;
                },

                whereNull: function(field) {
                    this.appendCondition(field + '.null:true', '|')
                    return this;
                },

                whereNotNull: function(field) {
                    this.appendCondition(field + '.notnull:true', '|')
                    return this;
                },

                groupBy: function(groupby) {
                    this.queryParams.groupby = groupby;
                    return this;
                },

                limit: function(limit) {
                    this.queryParams.limit = limit;
                    return this;
                },

                offset: function(offset) {
                    this.queryParams.offset = offset;
                    return this;
                },

                count: function(value) {
                    this.queryParams.count = value;
                    return this;
                },

                join: function(join) {
                    if (typeof join === 'string') {
                        this.queryParams.join = join;
                    } else {
                        // If we pass an object to this join function we'll build a join string using the objects structure.
                        // Ex. {user: {}, vendor: {company: {}}} will be translated to 'user,vendor.company'

                        var joinString = "";

                        var buildJoinString = function(str, obj) {
                            var keys = Object.keys(obj);
                            if (keys.length === 0) {
                                joinString += (joinString !== '' ? ',' : '') + str;
                            } else {
                                keys.forEach(function(key) {
                                    buildJoinString(str + (str !== '' ? '.' : '') + key, obj[key]);
                                });
                            }
                        };

                        buildJoinString("", join);
                        if (joinString === "") {
                            this.queryParams.join = "none";
                        } else {
                            this.queryParams.join = joinString;
                        }
                    }
                    return this;
                },

                fields: function(fields) {
                    this.queryParams.fields = fields.join(',');
                    return this;
                },

                customParam: function(name, value) {
                    this.queryParams[name] = value;
                    return this;
                },

                pageSize: function() {
                    return this.queryParams.limit;
                },

                sortby: function(sortby) {
                    this.queryParams.sortby = sortby;
                    return this;
                },

                order: function(order) {
                    this.queryParams.order = order;
                    return this;
                },

                appendCondition: function(condition, delimiter) {
                    if (this.queryParams.query != undefined) {
                        this.queryParams.query += delimiter;
                    } else {
                        this.queryParams.query = '';
                    }
                    this.queryParams.query += condition;
                },

                build: function() {
                    return JSON.parse(JSON.stringify(this.queryParams));
                }
            }
        }
    }
};

export default QueryBuilder;

Vue.use(QueryBuilder)