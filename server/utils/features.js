class ApiFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    search() {
        const keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword,
                $options: "i",
            }

        } : {}
        this.query = this.query.find({ ...keyword })
        return this
    }

    filter() {
        const queryCopy = { ...this.queryString }
        const removeableFields = ["keyword", "page", "limit"]
        removeableFields.forEach(key => delete (queryCopy[key]))

        //for price 
        let querystr = JSON.stringify(queryCopy)
        querystr = querystr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`)
        this.query = this.query.find(JSON.parse(querystr))

        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryString.page) || 1;
        const skip = resultPerPage * (currentPage - 1)
        this.query = this.query.limit(resultPerPage).skip(skip)
        return this
    }
}

module.exports = ApiFeatures
